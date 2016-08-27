import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as MoviesActions from '../movies.actions';

import MovieBasicInfo from './movie-basic-info.jsx';
import TextInput from '../../shared/components/text-input.jsx';
import If from '../../shared/components/if.jsx';

export default class MoviePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {        
        const searchInput = this.props.moviesState.get('searchInput');
        const movies = this.props.moviesState.get('movies');

        return <div>
            <h1>Movie Page</h1>
            <p> You can search movies here on this page.</p>
            <TextInput
                type={'text'}
                value={searchInput}
                onChange={ this.handleSearchInputChange } />
            <If condition={movies.size > 0} >
                <div>
                    {this.renderMovies(movies)}
                </div>
            </If>
        </div>;
    }

    handleSearchInputChange(searchInput){
        MoviesActions.UpdateSearchInput(searchInput);
        MoviesActions.SearchMovies(searchInput);
    }

    renderMovies(movies) {
        return movies.map(movie => this.renderMovie(movie));
    }

    renderMovie(movie) {
        return <MovieBasicInfo 
            key={movie.get('imdbId')}
            movie={movie} />
    }
}

MoviePage.propTypes = {
    moviesState: ImmutablePropTypes.contains({
        searchInput: PropTypes.string.isRequired,
        movies: ImmutablePropTypes.list,
    }),
};