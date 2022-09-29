import React from 'react'

const SearchBarWithCheckBox = (props) => {

  const changeHandler = (e) => {
  //  console.log(e.target.checked);
    props.checkBoxVal(e.target.checked);
  }
  return (
    <div className='my-4'>
        <input className='border-2 border-gray-500' type="text" placeholder='search'></input><br />
        <input  type="checkBox" checked={props.checked}  onChange={changeHandler} id="check"></input>
        <label className="select-none" htmlFor='check'>Only show products in stock</label>
    </div>
  )
}

export default SearchBarWithCheckBox