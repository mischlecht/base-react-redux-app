/* eslint-disable import/default */
import * as Immutable from 'immutable';
import * as MoviesModels from '../movies/constants/movies.models';

export function projectBasicMovieResultsToObject(movies){
    let projectedMoviesResults = Immutable.List();

    movies.forEach(function(movie) {
        projectedMoviesResults = projectedMoviesResults.push(new MoviesModels.MovieBasicRecord({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            imdbId: movie.imdbID,
        }));
    });

    return projectedMoviesResults;
}