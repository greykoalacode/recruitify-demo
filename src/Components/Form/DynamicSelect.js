import React from 'react';
import PropTypes from 'prop-types';

function DynamicSelect({type, label, min, max, labelFor, options, required, placeholder}) {
    return (
        <div className="dynamic-select">
            <span className="dynamic-select-label">{label}</span>
            <div className="dynamic-select-input">
                <select name={labelFor}>
                    {
                        options.map(
                            each => (
                                <option value={each.value} key={each.label}>
                                    {each.label}
                                </option>
                            )
                        )
                    }
                </select>
                <input placeholder={placeholder} required={required} min={min} max={max} type={type} name={labelFor} />
            </div>
        </div>
    )
}

DynamicSelect.propTypes ={
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string
};
export default DynamicSelect;
