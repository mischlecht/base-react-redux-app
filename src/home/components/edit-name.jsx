import React, { PropTypes } from 'react';
import Immutable from 'immutable';

import * as HomeActions from '../home.actions';
import TextInput from '../../shared/components/text-input.jsx';

export default class EditNameStateful extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            myName: Immutable.fromJS({
                firstName: '',
                lastName: '',
            })
        };

        this.updateMyName = this.updateMyName.bind(this);
        this.handleSubmitMyNameEdit = this.handleSubmitMyNameEdit.bind(this);
    }

    componentWillMount() {
        this.setState({ myName: this.props.myName });
    }

    render() {
        const myName = this.state.myName;
        const firstName = myName.get('firstName');
        const lastName = myName.get('lastName');

        return <EditNameStateless
            firstName={firstName}
            lastName={lastName}
            onFirstNameEdit={val => this.updateMyName('firstName', val)}
            onLastNameEdit={val => this.updateMyName('lastName', val)}
            onSubmitMyNameEdit={this.handleSubmitMyNameEdit} />
    }

    updateMyName(propName, val) {
        const newMyName = this.state.myName.set(propName, val);
        this.setState({ myName: newMyName });
    }

    handleSubmitMyNameEdit() {
        HomeActions.UpdateName(this.state.myName);
    }

};

EditNameStateful.propTypes = {
  myName: PropTypes.object.isRequired
};

export class EditNameStateless extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            <p>First Name:</p>
            <TextInput
                type='text'
                value={this.props.firstName}
                onChange={this.props.onFirstNameEdit} />
            <p>Last Name:</p>
            <TextInput
                type='text'
                value={this.props.lastName}
                onChange={this.props.onLastNameEdit} />
            <button onClick={this.props.onSubmitMyNameEdit} >Submit Changes to Store</button>
        </div>;
    }
}

EditNameStateless.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onFirstNameEdit: PropTypes.func.isRequired,
  onLastNameEdit: PropTypes.func.isRequired,
  onSubmitMyNameEdit: PropTypes.func.isRequired,
};