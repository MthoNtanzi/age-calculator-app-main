import React from 'react'
import './Output.css'

export default function Outputs() {
  return (
    <div>
        <p className='outputValue'><span id='yearField' className='outputNumber'>--</span>years</p>
        <p className='outputValue'><span id='monthField' className='outputNumber'>--</span>months</p>
        <p className='outputValue'><span id='dayField' className='outputNumber'>--</span>days</p>
    </div>
  )
}
