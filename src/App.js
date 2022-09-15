import React, { useState } from 'react';
import './App.css';
import TimerRcc from './components/TimerRcc';
import TimerRfc from './components/TimerRfc';


function App() {
  const [show, setShow]  = useState(true);
  let value = 100;

  const removeHandler = () => {
    // setShow(false);
    setShow((prevState) => { return !prevState });
  }
  return (
    <div>
        {show &&
       /*    <TimerRfc /> */
        <TimerRcc startVal = {value} />
        } 
        <button onClick={removeHandler}>Remove seconds</button>
    </div>
  );
}

export default App;
