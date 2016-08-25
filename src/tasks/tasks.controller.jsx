import React from 'react';
import { store } from '../store/store';

import TasksPage from './components/tasks-page.jsx';

export default class TasksController extends React.Component {
    constructor(props){
        super(props);
        
        this.getStateFromStore = this.getStateFromStore.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        
        this.state = this.getStateFromStore();
    }

    componentWillMount(){
        this.setState({ tasksState: this.getStateFromStore() });
    }

    componentDidMount(){
        store.subscribe(this.onStoreChange);
    }

    render() {
        return <div>
            <TasksPage
                tasksState={ this.state.tasksState } />
        </div>;
    }

    getStateFromStore(){
        const storeState = store.getState();
        return storeState.get('tasksState');
    }

    onStoreChange() {
        const newState = this.getStateFromStore();
        this.setState({ tasksState: newState });
    }
};