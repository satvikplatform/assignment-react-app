import React from 'react'
import { useReducer } from 'react';

const ACTIONS = {             // like this we can insert hard coded values, so that if we want to change string we can change in a single place
    INCREMENT: "increment", 
    DECREMENT: "decrement"
}

const reducer = (state, action) => {
    switch(action.type) {
        case "increment" : return {count: state.count + 1};
        case "decrement" : return {count: state.count - 1};

        default : return state;
    }
}
const UseReducerScenario = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const buttonHandler = (e) => {
        if(e.target.name === "increment") {
            dispatch({type: "increment"});
        } else {
            dispatch({type: "decrement"});
        }
    }
  return (
    <div>
         <button name={ACTIONS.DECREMENT} onClick={buttonHandler} className='border-2 border-black p-3 m-6'>-</button>
        <span>count : {state.count}</span>
        <button name={ACTIONS.INCREMENT} onClick={buttonHandler} className='border-2 border-black p-3 m-6'>+</button>
    </div>
  )
}

export default UseReducerScenario