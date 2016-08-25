import * as Immutable from 'immutable';

export const Task = Immutable.Record({
    taskCid: '',
    title: 'New Task',
    description: '',
    isAdding: false,
    isEditing: false,
});

export const InitialState = Immutable.fromJS({
    tasks: Immutable.fromJS([])
});