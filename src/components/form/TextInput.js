// dependencies
//
import React from 'react';
import classnames from 'classnames';

/**
 * The TextInput component
 */
class TextInput extends React.Component {
    /**
     * Construct the component instance
     * @param  {Object} props The component props
     */
    constructor(props) {
        super(props);

        // initialize the state for the component
        //
        this.state = {
            value:   props.value,
            isValid: true,
        };

        this.validationMessage = props.validationMessage
            || `${this.props.description} is required`;

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    /**
     * Handle the blur event for the input element
     * @param  {Object} event The event object
     */
    onBlur(event) {
        // get the new value
        //
        const value = event.target.value;

        // determine if it's valid
        //
        const isValid = !this.props.required || !!value;

        // set the `isValid` state
        //
        this.setState({ isValid });

        if (this.props.onChildValidationEvent) {
            this.props.onChildValidationEvent(
                this.props.validationKey,
                isValid ? null : this.validationMessage
            );
        }
    }

    /**
     * Handle the change event for the input element
     * @param  {Object} event The event object
     */
    onChange(event) {
        const value = event.target.value;

        this.setState({ value });
    }

    /**
     * Render the component
     * @return {React.Element} The React element describing the component
     */
    render() {
        return (
            <div className={classnames('form-group', { 'has-error': !this.state.isValid })}>
                <input
                    type="text"
                    value={this.state.value}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                />
                {!this.state.isValid
                    ? <span className="help-block">{this.validationMessage}</span>
                    : null
                }
            </div>
        );
    }
}


// set the property types for the component
//
TextInput.propTypes = {
    required:               React.PropTypes.bool,
    value:                  React.PropTypes.string,
    description:            React.PropTypes.string,
    validationMessage:      React.PropTypes.string,
    validationKey:          React.PropTypes.string.isRequired,
    onChildValidationEvent: React.PropTypes.func.isRequired,
};

export default TextInput;
