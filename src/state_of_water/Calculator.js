import React, { useState } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

const Calculator = () => {
  const [state, setState] = useState({
    value: "",
    scale:"c"
  });


  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }


  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }


  const calcCelsiusChange = (value) => {
    setState({ value: value, scale:"c" });
  };
  const calcFahrenheitChange = (value) => {
    setState({ value: value, scale:"f" });
  };


  const celsius = state.scale === 'f' ? tryConvert(state.value, toCelsius) : state.value;
  const fahrenheit = state.scale === 'c' ? tryConvert(state.value, toFahrenheit) : state.value;

  return (
    <div>
      <TemperatureInput scale="c" calcValue={celsius} calcTempChange={calcCelsiusChange} />
      <TemperatureInput scale="f" calcValue={fahrenheit} calcTempChange={calcFahrenheitChange} />
      <BoilingVerdict temperatureVal={state.value} />
    </div>
  )
}

export default Calculator;


/*  let mainVal = state.value;
    let cValue = (mainVal - 32) * 5 / 9;
    let fValue = (mainVal * 9 / 5) + 32;
    setState({ celsiusValue: cValue });
    setState({ fahrenheitValue: fValue }); */