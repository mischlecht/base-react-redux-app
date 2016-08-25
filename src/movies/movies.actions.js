import * as ActionTypes from '../constants/action-types';
import { store } from '../store/store';

export function SearchMovies(searchVal) {
    const action = {
        type: ActionTypes.SEARCH_MOVIES,
        searchVal
    };

    store.dispatch(action);
}