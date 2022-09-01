import React from 'react';
import './App.css';
import TimerRcc from './components/TimerRcc';


function App() {
  let value = 100;
  return (
    <div>
        <TimerRcc startVal = {value} />
    </div>
  );
}

export default App;
