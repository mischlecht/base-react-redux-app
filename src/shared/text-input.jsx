import React, { PropTypes } from 'react';

export default class TextInput extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return <div>
            <input
                type='text'
                value={this.props.value}
                onChange={this.handleChange} />
        </div>;
    }

    handleChange(event) {
        const val = event.target.value;
        this.props.onChange(val);
    }
};

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}