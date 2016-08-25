import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as MoviesActions from '../movies.actions';

export default class MoviePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {        
        return <div>
            <h1>Movie Page</h1>
            <p> You can search movies here on this page.</p>
        </div>;
    }

    handleSearchInputChange(val){
        MoviesActions.SearchMovies(val);
    }
}

MoviePage.propTypes = {
    homeState: ImmutablePropTypes.contains({
        myName: PropTypes.object.isRequired,
    }),
};