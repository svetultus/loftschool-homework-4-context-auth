import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Header.css';
import SectionTitle from '../SectionTitle';
import '../Button';
import Button from '../Button';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.handlerLogout = this.handlerLogout.bind(this);
  }

  handlerLogout(e) {
    if (e.target.classList.contains('header-menu__button')) {
      console.log(' click по кнопке');
    }
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) =>
          isAuthorized ? (
            <header className="header">
              <SectionTitle className="header__title">Header</SectionTitle>
              <div className="header__content">
                <div className="header-menu">
                  <p className="header-menu__email header-email t-header-email">
                    {email}
                  </p>
                  <Button
                    id="btn-logout"
                    className="header-menu__button t-logout button"
                    onClick={logout}
                  >
                    Выйти
                  </Button>
                  {/* <button
                    id="btn-logout"
                    className="header-menu__button t-logout button"
                    onClick={logout}
                  >
                    
                  </button> */}
                </div>
              </div>
            </header>
          ) : (
            <header className="header">
              <SectionTitle className="header__title">Header</SectionTitle>
              <div className="header__content" />
            </header>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Header;
