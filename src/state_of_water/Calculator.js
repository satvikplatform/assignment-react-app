import React from 'react'
import TemperatureInput from './TemperatureInput'

const Calculator = () => {
  return (
    <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
    </div>
  )
}

export default Calculator