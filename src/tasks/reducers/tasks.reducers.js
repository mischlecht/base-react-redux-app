/* eslint-disable import/default */
import {Task} from '../constants/tasks.models';
import * as ClientIdFactory from '../../shared/factories/client-id-factory';

export function addTask (previous) {
    let updatedTasks = previous.getIn(['tasksState', 'tasks']);

    // TODO: Add logic to add task
    updatedTasks = updatedTasks.push(new Task({
        taskCid: ClientIdFactory.getCid('task_'),
        isAdding: true,
        isEditing: true,
    }));
 
    return previous.setIn(['tasksState', 'tasks'], updatedTasks);
}

export function toggleEditTask(previous, action) {
    let { taskCid } = action;

    const taskIndex = getIndexByCid(previous, taskCid);
    if(taskIndex !== -1 ) {
        const currentEditState = previous.getIn(['tasksState', 'tasks', taskIndex, 'isEditing']); 
        return previous.setIn(['tasksState', 'tasks', taskIndex, 'isEditing'], !currentEditState);
    }

    return previous;
}

export function saveEdit(previous, action) {
    let { taskDetails } = action;
    const taskCid = taskDetails.get('taskCid');

    const taskIndex = getIndexByCid(previous, taskCid);

    if(taskIndex !== -1 ) {
        taskDetails = taskDetails.set('isAdding', false);
        previous = previous.mergeIn(['tasksState', 'tasks', taskIndex], taskDetails);
        return toggleEditTask(previous, { taskCid });
    }

    return previous;
}

export function cancelEdit(previous, action) {
    let { taskCid } = action;

    const taskIndex = getIndexByCid(previous, taskCid);

    if(taskIndex !== -1 ) {
        if(previous.getIn(['tasksState', 'tasks', taskIndex, 'isAdding'])){
            return removeTask(previous, { taskCid });
        }

        return toggleEditTask(previous, { taskCid });
    }

    return previous;
}

export function removeTask(previous, action) {
    let { taskCid } = action;

    const taskIndex = getIndexByCid(previous, taskCid);

    if(taskIndex !== -1 ) {
        let tasks = previous.getIn(['tasksState', 'tasks']).delete(taskIndex);
        return previous.setIn(['tasksState', 'tasks'], tasks);
    }

    return previous;
}

function getIndexByCid(previous, cid) {
    const tasks = previous.getIn(['tasksState', 'tasks']);

    return tasks.findIndex(task => task.get('taskCid') === cid);
}