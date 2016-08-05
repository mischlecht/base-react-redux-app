import Immutable from 'immutable';
import ActionTypes from '../constants/action-types.js';

export function updateName (previous, action) {
    const { newName } = action;
    let newState = Object.assign({}, previous);

    newState.myName.firstName = newName.firstName;
    newState.myName.lastName = newName.lastName;

    return newState;
}