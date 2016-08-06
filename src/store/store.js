import * as ActionTypes from '../constants/action-types';
import {createStore} from 'redux';
import * as Models from '../home/home.models';
import * as Reducers from '../reducers/reducers';

export let initialState = Models.InitialState;

function homeApp(previous = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_NAME:
            return Reducers.updateName(previous, action);
        default:
            return previous;
  }
}

export const store = createStore(homeApp, window.devToolsExtension && window.devToolsExtension());