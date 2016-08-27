import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class MovieBasicInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const title = this.props.movie.get('title');
        const year = this.props.movie.get('year');
        const poster = this.props.movie.get('poster');
        const imdbId = this.props.movie.get('imdbId');

        return <div className={'movieBasicInfo'}>
            <h1>{title}</h1>
            <p>{year}</p>
            <img src={poster} className={'movieThumbnail'}/>
        </div>;
    }
};

MovieBasicInfo.propTypes = {
    movie: ImmutablePropTypes.contains({
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        imdbId: PropTypes.string.isRequired,
    }),
}