import React from 'react'

const PassingArgumentsInEvents = () => {

    const clickHandler = (res,e) => {
        console.log(res);
        console.log(e.type);
    }
  return (
    <div>
        <button onClick={(e) => {clickHandler("goal",e)}}>Score</button>
    </div>
  )
}

export default PassingArgumentsInEvents;