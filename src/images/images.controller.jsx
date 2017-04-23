import React from 'react';

import { store } from '../store/store';
import ImagesPage from './components/images-page.jsx';

export default class HomeController extends React.Component {
    constructor(props){
        super(props);
        
        this.getImagesStateFromStore = this.getImagesStateFromStore.bind(this);
        this.onStoreChange = this.onStoreChange.bind(this);
        
        this.state = this.getImagesStateFromStore();
    }

    componentWillMount(){
        this.setState({ imagesState: this.getImagesStateFromStore() });
    }

    componentDidMount(){
        store.subscribe(this.onStoreChange);
    }

    render() {
        return <div>
            <ImagesPage
                imagesState={ this.state.imagesState } />
        </div>;
    }

    getImagesStateFromStore(){
        const storeState = store.getState();
        return storeState.get('imagesState');
    }

    onStoreChange() {
        const newState = this.getImagesStateFromStore();
        this.setState({ imagesState: newState });
    }
};