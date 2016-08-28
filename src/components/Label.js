// dependencies
//
import React from 'react';

/**
 * The Label component
 * @param  {Boolean} required A flag indicating whether this label should be
 *                            postfixed with the required asterisk
 * @param  {String}  label    The text to display in the label component
 * @return {React.Element}    The React Element describing this component
 */
const Label = ({ htmlFor, required, label }) => (
    <label htmlFor={htmlFor} className="control-label">

        {label}

        {required
            && <sup style={{ color: 'red' }}>
                <i className="glyphicon glyphicon-asterisk" />
            </sup>
        }

    </label>
);

// set the property types for the Label component
//
Label.propTypes = {
    htmlFor:  React.PropTypes.string.isRequired,
    required: React.PropTypes.bool,
    label:    React.PropTypes.string,
};

// export the component
//
export default Label;