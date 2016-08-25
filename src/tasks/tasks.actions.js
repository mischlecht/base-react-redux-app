import * as ActionTypes from '../constants/action-types';
import { store } from '../store/store';

export function AddTask() {
    const action = {
        type: ActionTypes.TASKS_ADD_TASK,
    };

    store.dispatch(action);
}

export function ToggleEditTask(taskCid){
    const action = {
        type: ActionTypes.TASKS_TOGGLE_EDIT_TASK,
        taskCid
    };

    store.dispatch(action);
}

export function SaveEdit(taskDetails) {
    const action = {
        type: ActionTypes.TASKS_SAVE_EDIT,
        taskDetails
    };

    store.dispatch(action);
}

export function CancelEdit(taskCid) {
    const action = {
        type: ActionTypes.TASKS_CANCEL_EDIT,
        taskCid
    };

    store.dispatch(action);
}

export function RemoveTask(taskCid) {
    const action = {
        type: ActionTypes.TASKS_REMOVE_TASK,
        taskCid
    };

    store.dispatch(action);
}