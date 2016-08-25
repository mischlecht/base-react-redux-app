import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
  
    render(){
        return <div>
            <IndexLink to="/">Home</IndexLink>
            {' | '}
            <Link to="/tasks">Tasks</Link>
            {' | '}
            <Link to="/movies">Movies</Link>
            {' | '}
            <Link to="/about">About</Link>
            <br/>
            {this.props.children}
        </div>;
    }
};

App.propTypes = {
    children: PropTypes.element
};
