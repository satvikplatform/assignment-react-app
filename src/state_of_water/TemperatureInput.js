import React from 'react';
import { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
const scaleName = {
  c: "Celsius-Scale",
  f: "Fahrenheit-Scale"
};

const TemperatureInput = (props) => {
  const[state, setState] = useState({
      value:"",
  });

  const changeHandler = (e) => {
    setState({value:e.target.value});
  }

  return (
    <>
      <fieldset className='border-2 border-black h-32 m-4'>
          <legend>Enter the temperature in {scaleName[props.scale]}</legend>
          <input className='border-2 border-gray-500 m-2' value={state.value} onChange={changeHandler} />
          <BoilingVerdict temperatureVal={state.value} scale={props.scale}/>
      </fieldset>
    
    </>
  );
};
export default TemperatureInput;