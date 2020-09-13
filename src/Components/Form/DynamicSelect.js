import React from 'react'

function DynamicSelect({label, labelFor,options}) {
    return (
        <div>
            <span>{label}</span>
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
            <input type="text" name={labelFor} />
        </div>
    )
}

export default DynamicSelect;
