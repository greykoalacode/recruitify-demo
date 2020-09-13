import React from 'react';

function DatePicker({label, labelFor}) {
    return (
        <div>
            <label htmlFor={labelFor}>{label}</label>
            <input type="date" name={labelFor} />
        </div>
    )
}

export default DatePicker;
