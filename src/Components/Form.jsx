import React from 'react';
import '../static/sass/Form.scss';
import {NPRadOptions, ASOptions, MSOptions, NPOptions, CurrOptions, LandlineOptions, GenOptions} from '../Data/FormData';
import DynamicSelect from './Form/DynamicSelect';
import Radio from './Form/Radio';
import TextField from './Form/TextField';
import Checkbox from './Form/Checkbox';
import Select from './Form/Select';
import DatePicker from './Form/DatePicker';
import DOB from './Form/DOB';
import AddDynSel from './Form/AddDynSel';


function Form() {
    return (
        <form className="form" id="#info">
            <section className="form-section">
                <h3 className="form-section-title">Info</h3>
                <div className="form-section-each">
                    <TextField label="First Name" labelFor="fName" type="text" placeholder="Krishna Murthy" />
                    <TextField label="Middle Name" labelFor="mName" type="text" />
                    <TextField label="Last Name" labelFor="lName" type="text" />
                </div>
                <div className="form-section-each-1">
                    <Radio label="Gender" options={GenOptions} />
                    <Radio label="Marital Status" options={MSOptions} />
                </div>
                <div className="form-section-each-2">
                    <DOB />
                </div>
            </section>
            <section className="form-section">
                <h3 className="form-section-title">Contact Details</h3>
                <div className="form-section-each">
                    <TextField label="Permanent" labelFor="permanent" type="text" placeholder="#123 Avenue SM Street" />
                    <TextField label="Temporary" labelFor="temporary" type="text" />
                </div>
                <div className="form-section-each">
                    <TextField label="Location" labelFor="location" type="text" placeholder="Bangalore" />
                    <TextField label="Country" labelFor="country" type="text" placeholder="India" />   
                </div>
                <div className="form-section-each">
                    <DynamicSelect type="tel" placeholder={929292} label="Landline" labelFor="landline" options={LandlineOptions} />
                    <DynamicSelect type="tel" placeholder={929292} label="Mobile" labelFor="mobile" options={LandlineOptions} />
                </div>
                <AddDynSel />
            </section>
            <section className="form-section">
                <h3 className="form-section-title">Salary Details</h3>
                <div className="form-section-each-3">
                    <DynamicSelect type="number" min={100000} max={700000} label="Annual Salary*" labelFor="annsalary" options={CurrOptions} required/>
                    <DynamicSelect type="number" min={700000} max={800000} label="Expected Salary*" labelFor="expsalary" options={CurrOptions} required />
                    <Checkbox label="Negotiable" labelFor="negotiable" />
                </div>
                <div className="form-section-each">
                    <Select label="Notice Period*" labelFor="noticePeriod" options={NPOptions} required />
                    <Radio label="Notice Period*" options={NPRadOptions} required />
                    <Select label="How Long*" labelFor="howLong" options={NPOptions} required />
                    <Radio label="Already Serving" options={ASOptions} />
                    <DatePicker label="Last Day of Working*" labelFor="lastDay" required />
                </div>
            </section>
            <section className="form-section">
                <div className="form-section-each-4">
                    <button className="form-btn form-btn-back">Back</button>
                    <button type="submit" className="form-btn form-btn-save">Save & Next</button>
                    <button className="form-btn form-btn-exit">Exit</button>
                </div>
            </section>
        </form>
    )
}

export default Form;
