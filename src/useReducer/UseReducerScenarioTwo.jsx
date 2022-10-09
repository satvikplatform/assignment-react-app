import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';
import { act } from 'react-dom/test-utils';

const reducer = (todos, action) => {
    switch(action.type) {
        case "add-todo" : return [...todos, newTodo(action.payLoad.name)]
    }
}

const newTodo = (name) => {
    return {id:Date.now(), name:name, complete:false}
}

const UseReducerScenarioTwo = () => {
    const [name, setName] = useState("")
    const [todos, dispatch] = useReducer(reducer, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"add-todo", payLoad:{name: name}});
        setName("");
    }

    console.log(todos);
    
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <input className='border-black border-2 m-5' type="text" value={name} onChange={(e) => setName(e.target.value) } />
            <input type="submit" ></input>
       </form>
    </div>
  )
}

export default UseReducerScenarioTwo;