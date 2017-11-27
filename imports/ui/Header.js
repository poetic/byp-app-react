import React from 'react';

const Header = ({ centered, title }) => (
  <header className="header-section" ng-modal="foo()">
    <div className="heading-container">
      <h1 className={`${centered ? 'centered-header' : null} tertiary`}>{title}</h1>
    </div>
  </header>
)

export default Header
