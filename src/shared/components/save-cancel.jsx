import React, { PropTypes } from 'react';

import If from './if.jsx';

export default class SaveCancel extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className={'saveCancel'} >
            <If condition={this.props.onSave !== null} >
                <a onClick={this.props.onSave}>Save</a>
            </If>
            <If condition={this.props.onCancel !== null} >
                <a onClick={this.props.onCancel}>Cancel</a>
            </If>
        </div>;
    }
};

SaveCancel.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
}