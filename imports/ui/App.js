import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import ArtOrder from './ArtOrder';
import AudioVideoOrder from './AudioVideoOrder';
import Account from './Account';
import Dashboard from './Dashboard';

const App = () => (
  <div>
    <Nav />
    <Header />
    <Switch>
      <Route path='/av-order' component={AudioVideoOrder} />
      <Route path='/art-order' component={ArtOrder} />
      <Route path='/account' component={Account} />
      <Route exact path='/' component={Dashboard} />
      <Route component={() => <Redirect to='/' />} />
    </Switch>
  </div>
)

export default App
