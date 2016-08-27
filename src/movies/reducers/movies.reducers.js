/* eslint-disable import/default */
import * as Immutable from 'immutable';
import * as MoviesModels from '../constants/movies.models';
import * as Projections from '../../store/projections';

export function updateSearchInput(previous, action) {
    const { searchInput } = action;

    let newState = previous;

    newState = newState.setIn(['moviesState', 'searchInput'], searchInput);

    return newState;
}

export function setMovieResults (previous, action) {
    const { movieResults } = action;

    let newState = previous;

    newState = newState.setIn(['moviesState', 'movies'], Projections.projectBasicMovieResultsToObject(movieResults));

    return newState;
}