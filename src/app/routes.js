import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import HomePage from '../home/home.jsx';
import AboutPage from '../about/about.jsx';
import NotFoundPage from '../shared/not-found-page.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
