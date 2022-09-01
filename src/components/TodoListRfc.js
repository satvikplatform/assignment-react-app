import React from 'react'

const TodoListRfc = (props) => {
    const list = props.items.map((item) => {return <li key={item.id}>{item.text}</li>})
  return (
    <div>
        <ul>
            {list}
        </ul>
    </div>
  )
}

export default TodoListRfc