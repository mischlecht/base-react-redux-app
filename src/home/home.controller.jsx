import React, { PropTypes } from 'react';
import * as Immutable from 'immutable';

import { store } from '../store/store';
import Home from './components/home.jsx';

export default class HomeController extends React.Component {
    constructor(props){
        super(props);
        
        this.getHomeStateFromStore = this.getHomeStateFromStore.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        
        this.state = this.getHomeStateFromStore();
    }

    componentWillMount(){
        this.setState({ homeState: this.getHomeStateFromStore() });
    }

    componentDidMount(){
        store.subscribe(this.onStoreChange);
    }

    render() {
        return <div>
            <Home
                homeState={this.state.homeState}/>
        </div>;
    }

    getHomeStateFromStore(){
        const storeState = store.getState();
        return storeState.get('homeState');
    }

    onStoreChange() {
        const newState = this.getHomeStateFromStore();
        this.setState({ homeState: newState });
    }
};