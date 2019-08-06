import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.classLayout = 'main';

    if (this.props.header) this.classLayout += ' main--with-header';
    if (this.props.footer) this.classLayout += ' main--with-footer';
  }

  render() {
    const { header, footer, children } = this.props;
    return (
      <React.Fragment>
        {header}
        <main className={this.classLayout}>
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {footer}
      </React.Fragment>
    );
  }
}

export default Layout;
