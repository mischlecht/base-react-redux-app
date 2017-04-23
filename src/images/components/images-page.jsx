import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Image from './image.jsx';

export default class ImagesPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let image1 = this.props.imagesState.get('image1'),
            image2 = this.props.imagesState.get('image2');

        return <div>
            <h1>Image Rater</h1>
            <Image
                image={image1} />
            <Image
                image={image2} />
        </div>;
    }
};

ImagesPage.propTypes = {
    imagesState: ImmutablePropTypes.contains({
        image1: PropTypes.object.isRequired,
        image2:PropTypes.object.isRequired
    }),
}