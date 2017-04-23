import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app.jsx';
import HomeController from '../home/home.controller.jsx';
import ImagesController from '../images/images.controller.jsx';
import TasksController from '../tasks/tasks.controller.jsx';
import MoviesController from '../movies/movies.controller.jsx';
import AboutPage from '../about/components/about.jsx';
import NotFoundPage from '../shared/components/not-found-page.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeController}/>
    <Route path="images" component={ImagesController}/>
    <Route path="tasks" component={TasksController}/>
    <Route path="movies" component={MoviesController}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
