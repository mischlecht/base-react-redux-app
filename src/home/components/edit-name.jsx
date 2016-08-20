import React, { PropTypes } from 'react';
import * as HomeActions from '../home.actions';
import TextInput from '../../shared/components/text-input.jsx';

export default class EditName extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
        }

        this.handleFirstNameEdit = this.handleFirstNameEdit.bind(this);
        this.handleLastNameEdit = this.handleLastNameEdit.bind(this);
        this.handleSubmitToStore = this.handleSubmitToStore.bind(this);
    }

    componentDidMount() {
        this.setState(this.props.myName);
    }

    render() {
        return <EditNameStateless
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            onFirstNameEdit={this.handleFirstNameEdit}
            onLastNameEdit={this.handleLastNameEdit}
            onSubmitToStore={this.handleSubmitToStore} />
    }

    handleFirstNameEdit(val) {
        this.setState({firstName: val});
    }

    handleLastNameEdit(val) {
        this.setState({lastName: val});
    }

    handleSubmitToStore() {
        HomeActions.UpdateName(this.state);
    }

};

EditName.propTypes = {
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
            <button onClick={this.props.onSubmitToStore} >Submit Changes to Store</button>
        </div>;
    }
}

EditNameStateless.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onFirstNameEdit: PropTypes.func.isRequired,
  onLastNameEdit: PropTypes.func.isRequired,
  onSubmitToStore: PropTypes.func.isRequired,
};