import React, { useState } from 'react';
import './Inputs.css';
import arrow from '../images/icon-arrow.svg';

export default function Inputs() {
  const [inputDayVal, setInputDayVal] = useState("");

  const handleDayChange = (e) =>{
    const day = e.target.value;
    setInputDayVal(day);
    console.log(day);
  }

  const [inputMonthVal, setInputMonthVal] = useState("");

  const handleMonthChange = (e) =>{
    const month = e.target.value;
    setInputMonthVal(month);
    console.log(month);
  }
  const [inputYearVal, setInputYearVal] = useState("");

  const handleYearChange = (e) =>{
    const year = e.target.value;
    setInputYearVal(year);
    console.log(year);
  }

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  console.log(userDate)
  return (
    <>
      <div className='inputFields'>
        <div className='dateFields'>
        <label>DAY</label>
        <input 
        className='inputs'
        type='number' 
        placeholder='DD'
        name='day'
        value={inputDayVal}
        onChange={handleDayChange}
        />
        <p className='errorMsg'
          id="dayErrorMsg">Error</p>
        </div>
        <div className='dateFields'>
        <label>MONTH</label>
        <input 
        className='inputs'
        type='number' 
        placeholder='MM'
        name='month'
        value={inputMonthVal}
        onChange={handleMonthChange}
        />
        <p className='errorMsg'
          id="monthErrorMsg">Error</p>
        </div>
        <div className='dateFields'>
        <label>YEAR</label>
        <input 
        className='inputs'
        type='number' 
        placeholder='YYYY'
        name='year'
        value={inputYearVal}
        onChange={handleYearChange}
        />
        <p className='errorMsg'
          id="yearErrorMsg">Error</p>
        </div>
        
      </div>
      {/* Calculate button */}
      <div className='buttonField'>
          <img src={arrow} className='iconArrow' alt='Calculate Arrow' />
        </div>
    </>
  )
}
