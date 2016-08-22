import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as TasksActions from '../tasks.actions';

export default class Task extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const task = this.props.taskDetails;

        const title = task.get('title');
        const description = task.get('description');
        const taskCid = task.get('taskCid');

        return <div className={'taskDetailsContainer'}>
            <h3>{title}</h3>
            <p className={'taskDescription'} >Description: {description}</p>
            <p className={'taskCid'} >Task Cid: {taskCid}</p>
            <a onClick={() => this.handleEdit(taskCid)} className={'editTask'} >Edit</a>
        </div>;
    }

    handleEdit(taskCid) {
        TasksActions.ToggleEditTask(taskCid);
    }
};

Task.propTypes = {
    taskDetails: PropTypes.object.isRequired,
}