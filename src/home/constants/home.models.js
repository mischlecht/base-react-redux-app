import * as Immutable from 'immutable';

export const MyName = Immutable.Record({
    firstName: 'Michael',
    lastName: 'Schlecht',
});

export const InitialState = Immutable.fromJS({
    myName: new MyName()
});