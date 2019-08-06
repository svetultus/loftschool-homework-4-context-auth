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
    return (
      <React.Fragment>
        {this.props.header}
        <main className={this.classLayout}>
          <SectionTitle className="main__title">Main</SectionTitle>
          {this.props.children}
        </main>
        {this.props.footer}
      </React.Fragment>
    );
  }
}

export default Layout;
