//import { expect } from 'chai';
import * as ActionTypes from '../../constants/action-types';
import * as Images from './images.reducers';
import * as Models from '../../constants/models';

describe('ImagesReducers', () => {
    const getInitialState = () => {
        return Models.AppState;
    };

    /*
    it('update the name in the store', () => {
        let testState = getInitialState();

        const action = {
            type: ActionTypes.UPDATE_NAME,
            newName: {
                firstName: 'NewFirstName',
                lastName: 'NewLastName',
            }
        };
        
        testState = HomeReducers.updateName(testState, action);

        testState.getIn(['homeState', 'myName', 'firstName']).should.equal('NewFirstName');
        testState.getIn(['homeState', 'myName', 'lastName']).should.equal('NewLastName');
    });
    */
});
