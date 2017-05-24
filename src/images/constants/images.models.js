import * as Immutable from 'immutable';

export const Image = Immutable.Record({
    photoId: '',
    srcUrl: '',
});

export const InitialState = Immutable.fromJS({
    image1: new Image({
        photoId: 'image1',
        srcUrl: 'http://ste.india.com/sites/default/files/2016/01/21/452974-monkey.jpg'
    }),
    image2: new Image({
        photoId: 'image2',
        srcUrl: 'https://www.longleat.co.uk/api/v2/storage/public/assets/25/monkey-mayhem/monkey-grid-1_original_original.jpg'
    }),


});
