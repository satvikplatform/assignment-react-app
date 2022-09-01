import React, { useState } from 'react'
import TodoListRfc from './TodoListRfc';

const TodoRfc = () => {
  const[state, setState] = useState({
    items:[],
    text:""
  })

  const changeHandler = (e) => {
      console.log("in changeHandler");
      console.log(e.target.value);
      setState({...state, text: e.target.value});
  }
  const submitHandler = (e) => {
      e.preventDefault();
      if(state.text.length === 0) {
        return ;
      }
      const newItem = {
        text:state.text,
        id:Math.random()
      }
      setState((prevState) => {return {items: prevState.items.concat(newItem), text: ""}});
  }
 
  return (
    <div>
      <h1>Todo</h1>
      <TodoListRfc items = {state.items} />
      <form onSubmit={(e) => {submitHandler(e)}}>
          <label htmlFor = "todo">
            <h3>What need to be done ?</h3>
          </label>
          <input id = "todo" value = {state.text} onChange = {changeHandler}></input><br /><br />
          <button>ADD</button>
      </form>
    </div>
  );
};

export default TodoRfc