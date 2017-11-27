import React, { Component } from 'react';

class Nav extends Component {
  goTo(path) {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return (
      <div className="navbar w-nav" data-animation="default" data-collapse="medium" data-duration="400">
        <div className="container w-clearfix"><a className="w-nav-brand" href="index.html"><img src="images/byp-logo.png" width="60" /></a>
          <div className="nav-company-info">
            <div>Ph: 281-240-7400<br /><a href="http://www.byp.com/" target="_blank" className="tertiary company-link">Fax: 281-240-7440</a></div>
          </div>
          <div className="menu-login-wrapper">
            <div className="display-inline-block">
              <a onClick={() => this.goTo('/')} className="btn btn-small w-button">Dashboard</a>
            </div>
            <div className="display-inline-block">
              <div className="w-dropdown" data-delay="0">
                <div className="dropdown w-dropdown-toggle" data-ix="dropdown-arrow-flip">
                  <div>Bart Kowalski</div>
                  <div className="dropdown-arrow-override w-icon-dropdown-toggle"></div>
                </div>
                <nav className="dropdown-list w-dropdown-list">
                  <a onClick={() => this.goTo('account')} className="dropdown-link w-dropdown-link">Account Settings</a>
                  <a onClick={() => this.goTo('login')} className="dropdown-link w-dropdown-link">LOG OUT</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
