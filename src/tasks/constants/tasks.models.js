import * as Immutable from 'immutable';
import * as ClientIdFactory from '../../shared/factories/client-id-factory';

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