import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/page/:pageNumber' component={App} />
      <Route exact path='/' component={App} />
    </Switch>
  </Router>,

  document.getElementById('root')
);
