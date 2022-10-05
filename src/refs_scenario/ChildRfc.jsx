import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const ChildRfc = () => {
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    })
  return (
    <div>
        <h1>From Rfc</h1>
        <input type="text" ref={textInput}/>
    </div>
  )
}

export default ChildRfc