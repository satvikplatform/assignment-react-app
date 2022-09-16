import React, {useState} from 'react'

const SelectTagMultipleScenario = () => {
    const[state, setState] = useState({
        value:"strawberry",
    });

    const changeHandler = (event) => {
        setState({value:event.target.value});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        alert(`Your selected flavour is ${state.value}`);
        setState({value:"strawberry"});
    }
  return (
    <div>
         <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <label>Pick your Favorite Flavour</label>
                <select multiple={true} value={state.value} onChange={changeHandler}>
                    <option value="grapefruit">Grape Fruit</option>
                    <option value="mango">Mango</option>
                    <option value="coconut">Coconut</option>
                    <option value="pineapple">Pineapple</option>
                    <option value="strawberry">Strawberry</option>
                </select>
                <button>Submit</button>
            </form>
    </div>
  );
};

export default SelectTagMultipleScenario;