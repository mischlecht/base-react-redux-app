/* eslint-disable import/default */

export function voteForImage (previous, action) {
    const { image } = action;

    // TODO hook up this reducer to API to log vote, then get new images

    let image1 = previous.getIn(['imagesState', 'image1']),
        image2 = previous.getIn(['imagesState', 'image2']);

    return previous.setIn(['imagesState', 'image1'], image2)
                    .setIn(['imagesState', 'image2'], image1);
}