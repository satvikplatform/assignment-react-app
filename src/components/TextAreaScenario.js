import React, {useState} from 'react'

const TextAreaScenario = () => {
    const[state, setState] = useState({
        value:"Please write an essay about your favorite DOM element."
    });

    const changeHandler = (event) => {
        setState({value:event.target.value});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        alert(`The name you entered is ${state.value}`);
        setState({value:""});
    }
  return (
    <div>
         <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <textarea value={state.value} onChange={changeHandler}></textarea>
                <button>Submit</button>
            </form>
    </div>
  )
}

export default TextAreaScenario;