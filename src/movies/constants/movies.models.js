import * as Immutable from 'immutable';

export const MovieRecord = Immutable.Record({
    title: '',
    year: '',
});

export const InitialState = Immutable.fromJS({
    searchInput: 'hello',
    movieResults: Immutable.List(),
});