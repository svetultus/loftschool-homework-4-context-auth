import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isAuthorized: false,
      authorizeError: '',
      email: ''
    };
    this.authorize = this.authorize.bind(this);
    this.logout = this.logout.bind(this);
    this.getProviderValue = this.getProviderValue.bind(this);
  }
  //static contextType = MyContext;

  getProviderValue() {
    // let value = this.context.value;
    // return this.context.value;
  }

  authorize(email, password) {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({ isAuthorized: true, authorizeError: '', email: email });
    } else {
      this.setState({
        email: '',
        isAuthorized: false,
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  }
  logout() {
    this.setState({ isAuthorized: false, authorizeError: '', user: '' });
  }

  render() {
    const { children } = this.props;
    //this.getProviderValue();

    return (
      <Provider
        value={{
          isAuthorized: this.state.isAuthorized,
          authorize: this.authorize,
          logout: this.logout,
          authorizeError: this.state.authorizeError,
          email: this.state.email
        }}
      >
        {children}
      </Provider>
    );
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
