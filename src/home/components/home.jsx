import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import HomeActions from '../home.actions';
import { initialState, store } from '../../store/store';
import EditName from './edit-name.jsx';

export default class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.getStateFromStore = this.getStateFromStore.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);

        this.state = this.getStateFromStore();
    }

    componentDidMount(){
        store.subscribe(this.onStoreChange);
    }

    render() {
        const myName = this.state.myName;
        const firstName = myName.firstName;
        const lastName = myName.lastName;
        return <div>
            <h1>Base React/Redux App</h1>
            <p> My Name in the Store: {firstName} {lastName}</p>
            <EditName
                myName={myName} />
        </div>;
    }

    getStateFromStore(){
        return store.getState();
    }

    onStoreChange() {
        const newState = this.getStateFromStore();
        this.setState(newState);
    }
};