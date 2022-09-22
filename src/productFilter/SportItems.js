import React from 'react'
import { useState } from 'react';

const SportItems = (props) => {
  return (
    <div className='flex justify-between w-[250px]'>
        <h1>{props.item.name}</h1>
        <h1>{props.item.price}</h1>
    </div>
  )
}

export default SportItems