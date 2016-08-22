import * as ActionTypes from '../constants/action-types';
import { store } from '../store/store';

export function UpdateName(newName) {
    const action = {
        type: ActionTypes.UPDATE_NAME,
        newName
    };

    store.dispatch(action);
}