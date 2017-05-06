import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/app.jsx'

const app = document.getElementById('app');

render((
  <Router>
    <Route path='/' component={App} />
  </Router>),
app);
