import React from 'react'
import { useState } from 'react'

const CounterExample = () => {
    const [state, setState] = useState({
        fName:"satvik",
        lName:"Karanam",
        age:24,
        counter:0
    });
    const clickHandler = (e) => {
        console.log(e.target.name);
        if(e.target.name === "button1") {
           // setState((prevState) => {return {...prevState, counter: prevState.counter + 1}});
           setState({...state, counter: state.counter + 1});
        }
        if(e.target.name === "button2") {
            setState((prevState) => {return {...prevState, counter: prevState.counter + 2}});
        }
        if(e.target.name === "button3") {
            setState((prevState) => {return {...prevState, counter: prevState.counter + 3}});
        }
        if(e.target.name === "button4") {
            setState((prevState) => {return {...prevState, counter: prevState.counter + prevState.age}});
        }
    }
    return (
        <>
            <h1 className='capitalize m-4 font-bold text-2xl'>Hello {state.fName} {state.lName} welcome to the app</h1>
            <h2 className='m-2 font-medium text-xl'>Value: {state.counter}</h2>
            <div className='m-6'>
                <button  onClick={clickHandler} className='border-2 border-black p-1 rounded' name="button1">Increment By 1</button><br /><br />
                <button  onClick={clickHandler} className='border-2 border-black p-1 rounded' name="button2">Increment By 2</button><br /><br />
                <button  onClick={clickHandler} className='border-2 border-black p-1 rounded' name="button3">Increment By 3</button><br /><br />
                <button  onClick={clickHandler} className='border-2 border-black p-1 rounded' name="button4">Increment By Your Age</button><br /><br />
            </div>
        </>
    )
}

export default CounterExample;