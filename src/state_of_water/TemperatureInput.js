import React from 'react';

const TemperatureInput = (props) => {
 
  const changeHandler = (e) => {
    props.calcTempChange(e.target.value);
  }

  return (
    <>
      <fieldset className='border-2 border-black h-32 m-4'>
          <legend>Enter the temperature in {props.scale === "c"? "Celsius":"Fahrenheint"}</legend>
          <input className='border-2 border-gray-500 m-2' value={props.calcValue} onChange={changeHandler} />
      </fieldset>
    
    </>
  );
};
export default TemperatureInput;