import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import If from '../../shared/components/if.jsx';
import TextInput from '../../shared/components/text-input.jsx';
import SaveCancel from '../../shared/components/save-cancel.jsx';
import * as TasksActions from '../tasks.actions';

export default class TaskEditStateful extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        const task = this.props.taskDetails;

        this.handleTaskEdit = this.handleTaskEdit.bind(this);

        this.setState({ taskDetails: this.props.taskDetails });
    }

    render() {
        const taskDetails = this.state.taskDetails;

        const title = taskDetails.get('title');
        const description = taskDetails.get('description');
        const taskCid = taskDetails.get('taskCid');
        const isAdding = taskDetails.get('isAdding');

        return <TaskEditStateless
            title={title}
            description={description}
            taskCid={taskCid}
            isAdding={isAdding}
            onChange={this.handleTaskEdit}
            onSave={() => this.handleSave(taskDetails)}
            onCancel={() => this.handleCancel(taskCid)}
            onRemove={() => this.handleRemove(taskCid)} />;
    }

    handleTaskEdit(propName, val) {
        let newTaskDeatils = this.state.taskDetails;

        newTaskDeatils = newTaskDeatils.set(propName, val);

        this.setState({ taskDetails: newTaskDeatils });
    }

    handleSave(taskDetails) {
        TasksActions.SaveEdit(taskDetails);
    }

    handleCancel(taskCid) {

        TasksActions.CancelEdit(taskCid);
    }

    handleRemove(taskCid) {
        TasksActions.RemoveTask(taskCid);
    }
};

TaskEditStateful.propTypes = {
    taskDetails: ImmutablePropTypes.contains({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        taskCid: PropTypes.string.isRequired,
    }),
}

export class TaskEditStateless extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const title = this.props.title;
        const description = this.props.description;
        const taskCid = this.props.taskCid;
        const isAdding = this.props.isAdding;

        return <div className={'taskDetailsContainer'}>
            <If condition={!isAdding}>
                <a onClick={this.props.onRemove} className={'removeTask'} >Remove</a>
            </If>
            <h5>Title: </h5>
            <TextInput
                autofocus={true}
                type='text'
                value={title}
                onChange={val => this.props.onChange('title', val)} />
            <h5>Description: </h5>
            <TextInput
                type='text'
                value={description}
                onChange={val => this.props.onChange('description', val)} />
            <p className={'taskCid'} >Task Cid: {taskCid}</p>
            <SaveCancel
                onSave={this.props.onSave}
                onCancel={this.props.onCancel} />
        </div>;
    }
}

TaskEditStateless.propTypes = {
    // values
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    taskCid: PropTypes.string.isRequired,
    isAdding: PropTypes.bool.isRequired,
    // functions
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}