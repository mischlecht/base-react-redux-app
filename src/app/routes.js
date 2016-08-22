import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import HomeController from '../home/home.controller.jsx';
import TasksPage from '../tasks/components/tasks.jsx';
import AboutPage from '../about/components/about.jsx';
import NotFoundPage from '../shared/components/not-found-page.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeController}/>
    <Route path="tasks" component={TasksPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
