import React from "react";
import { useState } from "react";

const ControlledFormComponent = () => {
    const[state, setState] = useState({
        value:""
    });

    const changeHandler = (event) => {
        setState({value:event.target.value});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        alert(`The name you entered is ${state.value}`);
        setState({value:""});
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input value={state.value} onChange={changeHandler}></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ControlledFormComponent;