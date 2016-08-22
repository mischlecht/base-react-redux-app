import React, { PropTypes } from 'react';

export default class If extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.condition) {
            return this.props.children;
        }

        return <div></div>;
    }
};

If.propTypes = {
    condition: PropTypes.bool.isRequired,
}