import * as ActionTypes from '../constants/action-types';
import { store } from '../store/store';

export function UpdateSearchInput(searchInput) {
    const action = {
        type: ActionTypes.UPDATE_SEARCH_INPUT,
        searchInput,
    };

    store.dispatch(action);
}

export function SearchMovies(searchInput) {
    const omdbUrl = `http://www.omdbapi.com/?s=${searchInput}`;
    let movieResults = [];

    if(searchInput.length > 1) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', omdbUrl, true);
        xhr.onload = function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.response).Search;
                    if (response) {
                        movieResults = response;
                    }
                    FetchMoviesSuccess(movieResults);
                }
            } 
        };
        xhr.send();
    } else {
        movieResults = [];
        FetchMoviesSuccess(movieResults);
    }
}

function FetchMoviesSuccess(movieResults) {
    const action = {
        type: ActionTypes.GOT_MOVIES_BASIC,
        movieResults
    };

    store.dispatch(action);
}