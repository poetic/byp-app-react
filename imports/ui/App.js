import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import ArtOrder from './ArtOrder';
import AudioVideoOrder from './AudioVideoOrder';
import Account from './Account';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';

const appWrapper = () => (
  <Route path='/' component={App} />
)

const App = (props) => (
  <div>
    <Nav {...props} />
    <Switch>
      <Route path='/av-order' component={AudioVideoOrder} />
      <Route path='/art-order' component={ArtOrder} />
      <Route path='/account' component={Account} />
      <Route path='/login' component={Login} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route exact path='/' component={Dashboard} />
      <Route component={() => <Redirect to='/' />} />
    </Switch>
  </div>
)

export default appWrapper
