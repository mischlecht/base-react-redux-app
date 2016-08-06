//import { expect } from 'chai';
import * as ActionTypes from '../constants/action-types';
import * as HomeReducers from './reducers';
import * as Models from '../home/home.models';

describe('HomeReducers', () => {
    const getInitialState = () => {
        return Models.InitialState;
    };

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

        testState.myName.firstName.should.equal('NewFirstName');
        testState.myName.lastName.should.equal('NewLastName');
    });
});
