import * as ActionTypes from '../constants/action-types';
import {createStore} from 'redux';
import * as Models from '../constants/models';
import * as HomeReducers from '../home/reducers/home.reducers';
import * as ImagesReducers from '../images/reducers/images.reducers';
import * as TasksReducers from '../tasks/reducers/tasks.reducers';
import * as MoviesReducers from '../movies/reducers/movies.reducers';

export let appInitialState = Models.AppState;

function app(previous = appInitialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_NAME:
            return HomeReducers.updateName(previous, action);

        /** Images Reducers **/
        case ActionTypes.IMAGES_VOTE_FOR_IMAGE:
            return ImagesReducers.voteForImage(previous, action);

        /** Tasks Reducers **/
        case ActionTypes.TASKS_ADD_TASK:
            return TasksReducers.addTask(previous, action);
        case ActionTypes.TASKS_TOGGLE_EDIT_TASK:
            return TasksReducers.toggleEditTask(previous, action);
        case ActionTypes.TASKS_SAVE_EDIT:
            return TasksReducers.saveEdit(previous, action);
        case ActionTypes.TASKS_CANCEL_EDIT:
            return TasksReducers.cancelEdit(previous, action);
        case ActionTypes.TASKS_REMOVE_TASK:
            return TasksReducers.removeTask(previous, action);

        /** Movies Reducers **/
        case ActionTypes.UPDATE_SEARCH_INPUT:
            return MoviesReducers.updateSearchInput(previous, action);
        case ActionTypes.GOT_MOVIES_BASIC:
            return MoviesReducers.setMovieResults(previous, action);

        /** Default **/
        default:
            return previous;
  }
}

export const store = createStore(app, window.devToolsExtension && window.devToolsExtension());