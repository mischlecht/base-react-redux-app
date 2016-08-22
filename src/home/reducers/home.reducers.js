/* eslint-disable import/default */

//import Immutable from 'immutable';

export function updateName (previous, action) {
    const { newName } = action;

    let newMyName = previous.getIn(['homeState', 'myName']);

    newMyName = newMyName.merge(newName);

    return previous.setIn(['homeState', 'myName'], newMyName);
}