import React, { PureComponent } from 'react';
import Layout from '../Layout';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth';
import Footer from '../Footer';
import Header from '../Header';

class App extends PureComponent {
  render() {
    const header = <Header />,
      footer = <Footer />;

    return (
      <AuthProvider>
        <Layout header={header} footer={footer}>
          <AuthConsumer>
            {({ isAuthorized, authorize, authorizeError }) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )
            }
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
