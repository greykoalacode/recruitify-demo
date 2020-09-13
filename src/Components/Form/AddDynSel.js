import React,{useState} from 'react';
import plus from '../../static/assets/plus.png';
import minus from '../../static/assets/minus.png';
import '../../static/sass/Form.scss';
import DynamicSelect from './DynamicSelect';

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

function AddDynSel() {
    const [ dd, setDD ] = useState([]);

    const handleDD = (e) => {
        e.preventDefault();
        setDD([...dd, DynamicSelect]);
        if(dd.length > 2){
            setDD([]);
        }
    };

    const decreaseDD = (e) => {
        e.preventDefault();
        setDD(dd.slice(0,dd.length-1));
        console.log(dd);
    };

    return (
        <div>
            <div className="form-section-each">
            {
                (dd.length > 0 && dd.length < 3) && (
                    dd.map(
                        (D,i) => (
                            <D key={"Additional Phone"+i} label={"Additional Phone "+ ++i} labelFor={"addPhone"+i} options={LandlineOptions} />
                        )
                    )
                )
            }
            </div>
            <div >
                {
                    (dd.length > 0 && dd.length < 3)?(
                        <div className="add-btn-container">
                            <button className="add-btn" onClick={handleDD}>
                                <img height="50" src={plus} alt="plus" />
                            </button>
                            <button className="add-btn" onClick={decreaseDD}>
                                <img height="50" src={minus} alt="minus" />
                            </button>
                        </div>
                    ): (
                        <button className="add-btn" onClick={handleDD}>
                            <img height="50" src={plus} alt="plus" />
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default AddDynSel;