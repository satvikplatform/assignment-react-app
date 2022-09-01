import React from "react";
import TodoList from "./TodoList";


class TodoRcc extends React.Component {
    constructor() {
        super();
        this.state = { items: [], text: "" }
    }


    changeHandler = (e) => {
        this.setState({ text: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
       const newItem = {
            text: this.state.text,
            id: Math.random()
        };
        this.setState((prevState) => { return { items: prevState.items.concat(newItem), text: "" } });
    }

    render() {
        return (
            <>
                <h1>Todo</h1>
                <TodoList items={this.state.items} />
                <form onSubmit={this.submitHandler}>
                    <label for="todo">
                        <h3>What need to be done ?</h3>
                    </label>
                    <input id="todo" value={this.state.text} onChange={this.changeHandler}></input><br /><br />
                    <button>ADD {this.state.items.length + 1}</button>
                </form>
            </>
        );
    };
};


export default TodoRcc;