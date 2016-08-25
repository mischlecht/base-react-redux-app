import * as Immutable from 'immutable';

import { InitialState as HomeInitialState } from '../home/constants/home.models';
import { InitialState as TasksInitialState } from '../tasks/constants/tasks.models';
import { InitialState as MoviesInitialState } from '../movies/constants/movies.models';

export const AppState = Immutable.Map({
    homeState: HomeInitialState,
    tasksState: TasksInitialState,
    moviesState: MoviesInitialState,
});