import React from 'react';

import { store } from '../store/store';
import MoviePage from './components/movie-page.jsx';

export default class MoviesController extends React.Component {
    constructor(props){
        super(props);
        
        this.getHomeStateFromStore = this.getHomeStateFromStore.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        
        this.state = this.getHomeStateFromStore();
    }

    componentWillMount(){
        this.setState({ moviesState: this.getHomeStateFromStore() });
    }

    componentDidMount(){
        store.subscribe(this.onStoreChange);
    }

    render() {
        return <div>
            <MoviePage 
                moviesState={this.state.moviesState} />
        </div>;
    }

    getHomeStateFromStore(){
        const storeState = store.getState();
        return storeState.get('moviesState');
    }

    onStoreChange() {
        const newState = this.getHomeStateFromStore();
        this.setState({ moviesState: newState });
    }
};