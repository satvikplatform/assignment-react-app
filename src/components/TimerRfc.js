import React, { useEffect, useState } from 'react'

const TimerRfc = () => {
    const [seconds, setSeconds] = useState(0);
    let interval;

    const secIncrement = () => {
        setSeconds((prevState) => {return prevState + 1});
     
    }
  useEffect(() => {
   interval = setInterval(secIncrement, 1000);
   return() => {
    console.log("seconds will be removed");
    clearInterval(interval);
 }
},[]);
  return (
    <>
        <h1>Seconds:{seconds}</h1>
    </>
    
  );
};

export default TimerRfc