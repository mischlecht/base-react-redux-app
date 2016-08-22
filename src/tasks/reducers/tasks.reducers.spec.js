//import { expect } from 'chai';
import Immutable from 'immutable';
import * as ActionTypes from '../../constants/action-types';
import * as TasksReducers from './tasks.reducers';
import * as Models from '../../constants/models';
import * as TasksModels from '../constants/tasks.models';

describe('Tasks Reducers', () => {
    const getInitialState = () => {
        return Models.AppState;
    };

    const getInitialStateWithSingleTaskBeingAdded = () => {
        return Immutable.fromJS({
            tasksState: {
                tasks: [
                    new TasksModels.Task({
                        title: 'Title',
                        description: 'Description',
                        taskCid: 'testCid',
                        isAdding: true,
                        isEditing: true,
                    })
                ]
            }
        });
    };

    it('adds a task', () => {
        let testState = getInitialState();

        const action = {
            type: ActionTypes.TASKS_ADD_TASK,
        };
        
        testState = TasksReducers.addTask(testState, action);

        testState.getIn(['tasksState', 'tasks']).size.should.eql(1);
        testState.getIn(['tasksState', 'tasks', 0, 'isAdding']).should.eql(true);
        testState.getIn(['tasksState', 'tasks', 0, 'isEditing']).should.eql(true);
    });

    it('adds and edits a task', () => {
        let testState = getInitialStateWithSingleTaskBeingAdded();

        const action = {
            type: ActionTypes.TASKS_SAVE_EDIT,
            taskDetails: Immutable.fromJS({
                title: 'EDITED',
                description: 'EDITED',
                taskCid: 'testCid',
                isAdding: true,
                isEditing: true,
            })
        };

        testState = TasksReducers.saveEdit(testState, action);

        testState.getIn(['tasksState', 'tasks', 0, 'title']).should.eql('EDITED');
        testState.getIn(['tasksState', 'tasks', 0, 'description']).should.eql('EDITED');
        testState.getIn(['tasksState', 'tasks', 0, 'isEditing']).should.eql(false);
    });
});
