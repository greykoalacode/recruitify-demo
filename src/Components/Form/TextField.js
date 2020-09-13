import React from 'react';
import '../../static/sass/Form.scss';
import PropTypes from 'prop-types';

function TextField({label,labelFor, type, required, placeholder}) {
    return (
        <div className="text-field">
            <label htmlFor={labelFor}>{label}</label>
            <input type={type} name={labelFor} placeholder={placeholder ? placeholder : " "} required={required} />
        </div>
    )
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string
}

export default TextField;
