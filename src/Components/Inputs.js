import React, { useState } from 'react';
import './Inputs.css';
import arrow from '../images/icon-arrow.svg';

export default function Inputs() {
  const [inputDayVal, setInputDayVal] = useState("");
  const [inputMonthVal, setInputMonthVal] = useState("");
  const [inputYearVal, setInputYearVal] = useState("");
  const [theDate, setTheDate] = useState("");

  const handleDayChange = (e) =>{
    const day = e.target.value;
    setInputDayVal(day);
    console.log(day);
  }

  const handleMonthChange = (e) =>{
    const month = e.target.value;
    setInputMonthVal(month);
    console.log(month);
  }
 
  const handleYearChange = (e) =>{
    const year = e.target.value;
    setInputYearVal(year);
    console.log(year);
  }

  const giveDate = () => {
    const dateString = `${inputYearVal}-${inputMonthVal}-${inputDayVal}`;
    setTheDate(dateString);
    console.log(theDate);


    const timestamp = Date.parse(dateString);
    const newDate = new Date(timestamp);
    console.log(newDate);


    const today = new Date(),
    
    dob = new Date(newDate),
    //difference in milliseconds
    diff = today.getTime() - dob.getTime(),
    //convert milliseconds into years
    years = Math.floor(diff / 31556736000),
    //1 day has 86400000 milliseconds
    days_diff= Math.floor((diff % 31556736000) / 86400000),
    //1 month has 30.4167 days
    months = Math.floor(days_diff / 30.4167),
    days = Math.floor(days_diff % 30.4167);
   
  //  console.log(`${years} years ${months} months ${days} days`);
   let trueAge = {"year": years, "month":months, "day": days};
  //  return trueAge;
  
   console.log(trueAge);
    
  }

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
          <img onClick={giveDate} src={arrow} className='iconArrow' alt='Calculate Arrow' />
        </div>
    </>
  )
}
