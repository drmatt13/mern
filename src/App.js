import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Users from './user/pages/Users'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Users />
      </Route>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
