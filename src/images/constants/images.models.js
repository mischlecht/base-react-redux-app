import * as Immutable from 'immutable';

export const Image = Immutable.Record({
    photoId: '',
    srcUrl: '',
});

export const InitialState = Immutable.fromJS({
    image1: new Image({
        photoId: 'image1',
        srcUrl: 'https://s3.us-east-2.amazonaws.com/hackweekend2017-image-storage/BeachPhotos/beach.png'
    }),
    image2: new Image({
        photoId: 'image2',
        srcUrl: 'https://s3.us-east-2.amazonaws.com/hackweekend2017-image-storage/BeachPhotos/beach2.0.png'
    }),


});