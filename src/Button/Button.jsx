import React from 'react';
import './button.css'

const Button = ({ value, className }) => {
    return (
      <button className={`button ${className ? className : ''}`}>{value}</button>
    );
  }
  
  export default Button;
  
