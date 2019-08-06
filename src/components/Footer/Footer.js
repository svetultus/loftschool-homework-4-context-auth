import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';
import SectionTitle from '../SectionTitle';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email }) =>
          isAuthorized ? (
            <footer className="footer">
              <SectionTitle className="footer__title">Footer</SectionTitle>
              <p className="footer-message t-footer">Вы вошли как {email}</p>
            </footer>
          ) : (
            <footer className="footer">
              <SectionTitle className="footer__title">Footer</SectionTitle>
              <p className="footer-message t-footer">Вы гость в этой системе</p>
            </footer>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Footer;
