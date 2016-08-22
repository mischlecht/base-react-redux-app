import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as TasksActions from '../tasks.actions';
import Task from './task.jsx';
import TaskEdit from './task-edit.jsx';
import If from '../../shared/components/if.jsx';

export default class TasksPage extends React.Component {
    constructor(props){
        super(props);

        this.renderTasks = this.renderTasks.bind(this);
    }

    render() {
        const tasks = this.props.tasksState.get('tasks');

        return <div>
            <h1>Tasks</h1>
            <a onClick={this.handleAddTask} className={'addTask'}>Add Task</a>
            <If condition={tasks.size > 0} >
                <div>
                    { this.renderTasks(tasks) }
                </div>
            </If>
        </div>;
    }

    handleAddTask() {
        TasksActions.AddTask();
    }

    renderTasks(tasks){
        return tasks.map(task => this.renderTask(task))
    }

    renderTask(task){
        if(task.get('isEditing')) {
            return <TaskEdit
                key={task.get('taskCid')}
                taskDetails={task} />
        }
        return <Task
            key={task.get('taskCid')}
            taskDetails={task} />
    }

};

TasksPage.propTypes = {
    tasksState: ImmutablePropTypes.contains({
        tasks: ImmutablePropTypes.list.isRequired,
    }),
}