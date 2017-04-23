import * as ActionTypes from '../constants/action-types';
import { store } from '../store/store';

export function VoteForImage(image) {
    const action = {
        type: ActionTypes.IMAGES_VOTE_FOR_IMAGE,
        image
    };

    store.dispatch(action);
}