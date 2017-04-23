import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ImagesActions from '../images.actions';

export default class Image extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let image = this.props.image,
            srcUrl = image.get('srcUrl');

        return <div>
            <img src={srcUrl}
                onClick={() => this.voteForImage(image)} />
        </div>;
    }

    voteForImage(image) {
        ImagesActions.VoteForImage(image);
    }
};

Image.propTypes = {
    image: ImmutablePropTypes.contains({
        photoId: PropTypes.string.isRequired,
        srcUrl: PropTypes.string.isRequired
    }),
}