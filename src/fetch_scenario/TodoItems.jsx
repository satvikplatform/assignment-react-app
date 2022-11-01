import React from 'react'

const TodoItems = (props) => {
  return (
    <>
      <li>{props.item.title}</li>
      <li>{props.item.id}</li>
      <hr />
    </>
  )
}

export default TodoItems