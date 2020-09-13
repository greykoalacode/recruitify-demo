import React from 'react'

function Radio({label, options}) {
    return (
        <section>
            <p>{label}</p>
            {
                options.map(
                    each => (
                        <div key={each.value}>
                            <input type="radio" name={label} value={each.value} />
                            <label htmlFor={each.value}>{each.label}</label>
                        </div>
                    )
                )
            }
        </section>
    )
}

export default Radio
