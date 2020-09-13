import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({label, labelFor, required}) {
    return (
        <div className="checkbox">
            <label htmlFor={labelFor} className="checkbox-label">
                {label}
                <input  required={required} type="checkbox" name={labelFor} />
            </label>
        </div>
    )
}

Checkbox.propTypes ={
    label: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    required: PropTypes.bool
};

export default Checkbox;
