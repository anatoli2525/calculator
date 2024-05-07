import { createElement } from 'react';
import Button from '../Button/Button.jsx';
import './footer.css'



const Footer = ({ calculatorButtons }) => {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let obj of calculatorButtons) {
        const el = <Button value={obj.text} key={obj.id} />
        if (obj.id >= 0 && obj.id <= 4) {
            { arr1.push(el) }
        }
        if (obj.id > 4 && obj.id <= 8) {
            { arr2.push(el) }
        }
        if (obj.id > 8 && obj.id <= 12) {
            { arr3.push(el) }
        }
        if (obj.id > 12 && obj.id <= 16) {
            { arr4.push(el) }
        }

    }
    return (
        <div className="footer">
            <div className='row'>{arr1}</div>
            <div className='row'>{arr2}</div>
            <div className='row'>{arr3}</div>
            <div className='row'>{arr4}</div>
        </div>
    );
};

export default Footer;
