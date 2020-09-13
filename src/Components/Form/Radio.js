import React from 'react';
import '../../static/sass/Form.scss';
import PropTypes from 'prop-types';

function Radio({label, options, required}) {
    return (
        <div className="radio">
            <label>{label}</label>
            <div className="radio-options">
                {
                    options.map(
                        each => (
                            <div key={each.value}>
                                <input required={required} type="radio" name={label.toLowerCase()} value={each.value} />
                                <label htmlFor={each.value} className="radio-label">{each.label}</label>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
};
Radio.propTypes ={
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool
};

export default Radio;
