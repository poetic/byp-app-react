import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '/imports/ui/App';

Meteor.startup(() => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  );
});
