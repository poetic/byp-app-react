import React from 'react';

const Nav = () => (
  <div className="navbar w-nav" data-animation="default" data-collapse="medium" data-duration="400">
    <div className="container w-clearfix"><a className="w-nav-brand" href="index.html"><img src="images/byp-logo.png" width="60" /></a>
      <div className="nav-company-info">
        <div>Ph: 281-240-7400<br /><a href="http://www.byp.com/" target="_blank" className="tertiary company-link">Fax: 281-240-7440</a></div>
      </div>
      <div className="menu-login-wrapper">
        <div className="display-inline-block"><a className="btn btn-small w-button" href="dashboard.html">Dashboard</a></div>
        <div className="display-inline-block">
          <div className="w-dropdown" data-delay="0">
            <div className="dropdown w-dropdown-toggle" data-ix="dropdown-arrow-flip">
              <div>Bart Kowalski</div>
              <div className="dropdown-arrow-override w-icon-dropdown-toggle"></div>
            </div>
            <nav className="dropdown-list w-dropdown-list">
              <a className="dropdown-link w-dropdown-link" href="dashboard.html">Dashboard</a>
              <a className="dropdown-link w-dropdown-link" href="account.html">Account Settings</a>
              <a className="dropdown-link w-dropdown-link" href="user-list.html">User List</a>
              <a className="dropdown-link w-dropdown-link" href="index.html">LOG OUT</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Nav
