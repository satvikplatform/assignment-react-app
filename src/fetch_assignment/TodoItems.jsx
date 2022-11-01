import React from 'react'

const TodoItems = (props) => {
    let status = "";
    if(props.data.completed === false) {
        status = "Not Completed"
    } else {
        status = "Completed"
    }
    return (
        <div style={{width:"80%", display:"flex", justifyContent:"space-between", backgroundColor:"lightcoral"}}>
            <p>{props.data.title}</p>
            <span className='px-2 h-[50%]' style={{border: "2px solid black", backgroundColor:props.data.completed === false? "red" : "lightGreen" }}>{status}</span>
            <hr />
        </div>

    )
}

export default TodoItems;