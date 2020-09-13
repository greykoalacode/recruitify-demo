import React from 'react';
import '../static/sass/Form.scss';
import DynamicSelect from './Form/DynamicSelect';
import Radio from './Form/Radio';
import TextField from './Form/TextField';
import Checkbox from './Form/Checkbox';
import Select from './Form/Select';
import DatePicker from './Form/DatePicker';

const options = [
    {
        value: "male",
        label: "Male"
    },
    {
        value: "female",
        label: "Female"
    },
];

const LandlineOptions = [
    {
        value: "91",
        label: "+91 (India)"
    },
    {
        value: "44",
        label: "+44 (UK)"
    },
    {
        value: "61",
        label: "+61 (Australia)"
    }

];
const NPOptions = [
    {
        value: "91",
        label: "+91 (India)"
    },
    {
        value: "44",
        label: "+44 (UK)"
    },
    {
        value: "61",
        label: "+61 (Australia)"
    }

];

function Form() {
    return (
        <form className="form">
            <section className="form-section">
                <div className="form-section-each">
                    <TextField label="First Name" labelFor="fName" type="text" required />
                    <TextField label="Middle Name" labelFor="mName" type="text" required />
                    <TextField label="Last Name" labelFor="lName" type="text" required />
                </div>
                <div className="form-section-each">
                    <Radio label="Gender" options={options} />
                    <Radio label="Marital Status" options={options} />
                </div>
            </section>
            <section className="form-section">
                <div className="form-section-each">
                    <TextField label="Permanent" labelFor="permanent" type="text" required />
                    <TextField label="Temporary" labelFor="temporary" type="text" required />
                </div>
                <div className="form-section-each">
                    <TextField label="Location" labelFor="location" type="text" required />
                    <TextField label="Country" labelFor="country" type="text" required />   
                </div>
                <div className="form-section-each">
                    <DynamicSelect label="Landline" labelFor="landline" options={LandlineOptions} />
                    <DynamicSelect label="Mobile" labelFor="mobile" options={LandlineOptions} />
                </div>
            </section>
            <section className="form-section">
                <div className="form-section-each">
                    <DynamicSelect label="Annual Salary" labelFor="annsalary" options={LandlineOptions} />
                    <DynamicSelect label="Expected Salary" labelFor="expsalary" options={LandlineOptions} />
                    <Checkbox label="Negotiable" labelFor="negotiable" />
                </div>
                <div className="form-section-each">
                    <Select label="Notice Period" labelFor="noticePeriod" options={NPOptions} />
                    <Radio label="Notice Period" options={options} />
                    <Select label="How Long" labelFor="noticePeriod" options={NPOptions} />
                    <Radio label="Already Serving" options={options} />
                    <DatePicker label="Last Day of Working" labelFor="lastDay" />
                </div>
            </section>
        </form>
    )
}

export default Form;
