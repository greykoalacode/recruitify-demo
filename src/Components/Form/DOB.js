import React from 'react';
import PropTypes from 'prop-types';

const DDOptions = [...Array(31).keys()].map(x => ("0"+ ++x).slice(-2));
const MMOptions = [...Array(12).keys()].map(x => ("0"+ ++x).slice(-2));
const YYOptions = [...Array(21).keys()].map(x => ("0"+ x).slice(-2));

const SelectDyn = ({options, labelFor}) => (
    <select className="dob-input" name={labelFor}>
        <option value={labelFor} defaultValue>{labelFor}</option>
        {
            options.map(
                each => (
                    <option key={each} value={each}>{each}</option>
                )
            )
        }
    </select>
);

SelectDyn.propTypes ={
    options: PropTypes.array.isRequired,
    labelFor: PropTypes.string.isRequired
};

function DOB() {
    return (
        <div className="dob">
            <label>DOB</label>
            <div className="dob-grid">
                <SelectDyn labelFor="DD" options={DDOptions} />
                <SelectDyn labelFor="MM" options={MMOptions} />
                <SelectDyn labelFor="YY" options={YYOptions} />
            </div>
        </div>
    )
};



export default DOB;
