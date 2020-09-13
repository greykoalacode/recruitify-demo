import React from 'react';

function Checkbox({label, labelFor}) {
    return (
        <section>
            <label htmlFor={labelFor}>
                {label}
                <input type="checkbox" />
            </label>
        </section>
    )
}

export default Checkbox;
