import React from 'react';


function Select({label, labelFor, options}) {
    return (
        <section>
            <label htmlFor={labelFor}>{label}</label>
            <select name={labelFor}>
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
}

export default Select;
