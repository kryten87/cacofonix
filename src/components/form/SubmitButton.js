// dependencies
//
import React from 'react';
import classnames from 'classnames';

/**
 * The SubmitButton component
 * @param  {String}   label   The label to display in the button
 * @param  {String}   style   The style with which to display the button
 * @param  {Function} onClick The `onClick` handler for the button
 * @param  {Boolean}  isValid A flag indicating whether the form to which this
 *                            button is attached is valid
 * @return {React.Element}    The React element describing this component
 */
const SubmitButton = ({ label, style, onClick }, { isValid }) => (
    <button
        className={classnames('btn', {
            'btn-danger':  style === 'danger' || style === 'error',
            'btn-warning': style === 'warning' || style === 'warn',
            'btn-info':    style === 'info',
            'btn-success': style === 'success' || style === 'ok',
            'btn-default': !style,
        })}
        disabled={!isValid}
        onClick={onClick}
    >
        {label || 'Submit'}
    </button>
);

// define the property types for the component
//
SubmitButton.propTypes = {
    label:   React.PropTypes.string,
    style:   React.PropTypes.string,
    onClick: React.PropTypes.func,
};

// define the context types for values received from higher up the food chain
//
SubmitButton.contextTypes = {
    isValid: React.PropTypes.bool,
};

// export the component
//
export default SubmitButton;