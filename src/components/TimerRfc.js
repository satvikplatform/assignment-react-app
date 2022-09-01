import React, { useEffect, useState } from 'react'

const TimerRfc = () => {
    const[seconds,setSeconds] = useState(0);


    useEffect(() => {setTimeout(() => {setSeconds((seconds) => seconds + 1)}, 1000)});

  
  return (
    <div>
        <h1>You came to this site at {seconds} seconds ago.</h1>
    </div>
  )
}

export default TimerRfc;