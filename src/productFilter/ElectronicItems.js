import React from 'react'

const ElectronicItems = (props) => {
  return (
    <div className='flex justify-between w-[250px]'>
        <h1 style={{color:props.item.stocked === true ? "black" : "red"}}>{props.item.name}</h1>
        <h1>{props.item.price}</h1>
    </div>
  )
}

export default ElectronicItems