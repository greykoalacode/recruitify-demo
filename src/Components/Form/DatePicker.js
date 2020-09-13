import React from 'react';
import PropTypes from 'prop-types';

function DatePicker({label, labelFor}) {
    return (
        <div className="date-picker">
            <label htmlFor={labelFor}>{label}</label>
            <input type="date" name={labelFor} />
        </div>
    )
}
DatePicker.propTypes ={
    label: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired
};

export default DatePicker;
