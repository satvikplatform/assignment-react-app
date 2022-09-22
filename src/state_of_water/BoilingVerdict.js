import React from 'react'

const BoilingVerdict = (props) => {

  if(isNaN(props.temperatureVal)) {
    return <p className='text-red-500'>Please enter a number</p>
  }

  if(props.scale === "c" && props.temperatureVal >= 100  ) {
    return <p>The water reached to Boiling point</p>
  }
  if(props.scale === "f" && props.temperatureVal >= 212) {
    return <p>The water reached to Boiling point</p>
  }
  return <p>The Water not reached to Boiling point</p>

};

export default BoilingVerdict;