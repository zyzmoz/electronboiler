import React, { Component } from 'react';
import HomePage from '../pages/Home';
import MenuComponent from './Menu';
import { HashRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router >
    <div>
      <MenuComponent />
      <Route exact path="/"
        component={HomePage}
      />
    </div>
  </Router>

export default App;