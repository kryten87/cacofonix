// dependencies
//
import React from 'react';
import Label from './Label';

const Dropdown = (props) => (
    <div className="form-group">
        {props.label ? <Label label={props.label} required={props.required} /> : ''}
    </div>
);

export default Dropdown;
