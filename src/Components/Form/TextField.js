import React from 'react';

function TextField({label,labelFor, type, required}) {
    // const value = label.toLowerCase();
    return (
        <section style={{display: "flex", flexDirection:"column", alignItems:"flex-start"}}>
            <label htmlFor={labelFor}>{label}</label>
            <input type={type} name={labelFor} placeholder=" " required={required} />
        </section>
    )
}

export default TextField;
