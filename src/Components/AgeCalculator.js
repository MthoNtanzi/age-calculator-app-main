import React, { useState } from 'react';
import './AgeCalculator.css';
import arrow from '../images/icon-arrow.svg';

export default function Inputs() {
  // Get the value for the days and set the state
  const [inputDayVal, setInputDayVal] = useState("");
  const [inputMonthVal, setInputMonthVal] = useState("");
  const [inputYearVal, setInputYearVal] = useState("");
  const [outYear, setOutYear] = useState("");
  const [outMonth, setOutMonth] = useState("");
  const [outDay, setOutDay] = useState("");

  const handleDayChange = (e) =>{
    const day = e.target.value;
    setInputDayVal(day);
  }

  const handleMonthChange = (e) =>{
    const month = e.target.value;
    setInputMonthVal(month);
  }
 
  const handleYearChange = (e) =>{
    const year = e.target.value;
    setInputYearVal(year);
  }


  // validate user Input
  let errorMsgDayBool = false;
  let errorMsgMonthBool = false;
  let errorMsgYearBool = false;

  let dayErrorMsg;
  let monthErrorMsg;
  let yearErrorMsg;
  if(inputDayVal > 31){
    errorMsgDayBool = true;
    dayErrorMsg = "Must be a valid day";
  }
  if(inputMonthVal > 12){
    errorMsgMonthBool = true;
    monthErrorMsg = "Must be a valid month";
  }

  const dateobj = new Date();
  const yearObject = dateobj.getFullYear();

  if(inputYearVal > yearObject){
    errorMsgYearBool = true;
    yearErrorMsg = "Must be in the past";
  }

  const giveDate = () => {
    if(inputYearVal === "" && inputMonthVal === "" && inputDayVal === ""){
      dayErrorMsg = "This feild is required";
      monthErrorMsg = "This feild is required";
      yearErrorMsg = "This feild is required";
      errorMsgDayBool = true;
      errorMsgMonthBool = true;
      errorMsgYearBool = true;
    }else{
      const dateString = `${inputYearVal}-${inputMonthVal}-${inputDayVal}`;
    
      const timestamp = Date.parse(dateString);
      const newDate = new Date(timestamp);
  

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
     
      setOutYear(years);
      setOutMonth(months);
      setOutDay(days);
    }
  }
  return (
    <>
      <div className='inputFields'>
        {/* start of day area */}
        <div className='dateFields'>
        <label className={`${errorMsgDayBool ? "errorMsgTrue": ""}`}>DAY</label>
        <input 
        className={`inputs ${errorMsgDayBool ? "inputErrorTrue": ""}`}
        type='number' 
        placeholder='DD'
        name='day'
        value={inputDayVal}
        onChange={handleDayChange}
        />
        <p className={`errorMsg ${errorMsgDayBool ? "errorMsgTrue": ""}`}>{dayErrorMsg}</p>
        {/* End of day area */}

        {/* Start of month area */}
        </div>
        <div className='dateFields'>
        <label className={`${errorMsgMonthBool ? "errorMsgTrue": ""}`}>MONTH</label>
        <input 
        className={`inputs ${errorMsgMonthBool ? "inputErrorTrue": ""}`}
        type='number' 
        placeholder='MM'
        name='month'
        value={inputMonthVal}
        onChange={handleMonthChange}
        />
        <p className={`errorMsg ${errorMsgMonthBool ? "errorMsgTrue": ""}`}>{monthErrorMsg}</p>
        </div>
        {/* End of Month area */}

        {/* Start of year area */}
        <div className='dateFields'>
        <label className={`${errorMsgYearBool ? "errorMsgTrue": ""}`}>YEAR</label>
        <input 
        className={`inputs ${errorMsgYearBool ? "inputErrorTrue": ""}`}
        type='number' 
        placeholder='YYYY'
        name='year'
        value={inputYearVal}
        onChange={handleYearChange}
        />
        <p className={`errorMsg ${errorMsgYearBool ? "errorMsgTrue": ""}`}>{yearErrorMsg}</p>
        </div>
        {/* End of year area */}
      </div>
      {/* Calculate button */}
      <div className='buttonField'>
          <img onClick={giveDate} src={arrow} className='iconArrow' alt='Calculate Arrow' />
      </div>
      <div>
        <p className='outputValue'><span id='yearField' className='outputNumber'>{outYear ? outYear : '--'}</span>years</p>
        <p className='outputValue'><span id='monthField' className='outputNumber'>{outMonth ? outMonth : '--'}</span>months</p>
        <p className='outputValue'><span id='dayField' className='outputNumber'>{outDay ? outDay : '--'}</span>days</p>
      </div>
    </>
  )
}
