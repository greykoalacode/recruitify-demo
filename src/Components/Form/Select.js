import React from 'react';
import PropTypes from 'prop-types';

function Select({label, labelFor, options}) {
    return (
        <section className="select">
            <label className="select-label" htmlFor={labelFor}>{label}</label>
            <select className="select-input" name={labelFor}>
                {
                    options.map(
                        each => (
                            <option key={each.label} value={each.value}>{each.label}</option>
                        )
                    )
                }
            </select>
        </section>
    )
};

Select.propTypes ={
    label: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
};

export default Select;
