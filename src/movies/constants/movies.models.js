import * as Immutable from 'immutable';

export const MovieBasicRecord = Immutable.Record({
    title: '',
    year: '',
    poster: '',
    imdbId: '',
});

export const InitialState = Immutable.fromJS({
    searchInput: '',
    movies: Immutable.List(),
});