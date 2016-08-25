import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import EditName from './edit-name.jsx';

export default class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const myName = this.props.homeState.get('myName');
        const firstName = myName.get('firstName');
        const lastName = myName.get('lastName');
        
        return <div>
            <h1>Base React/Redux App</h1>
            <p> My Name in the Store: <b>{firstName} {lastName}</b></p>
            <EditName
                myName={myName} />
        </div>;
    }
};

HomePage.propTypes = {
    homeState: ImmutablePropTypes.contains({
        myName: PropTypes.object.isRequired,
    }),
}