import React from 'react'

const SearchBarWithCheckBox = () => {
  return (
    <div className='my-4'>
        <input className='border-2 border-gray-500' type="text" placeholder='search'></input><br />
        <input  type="checkBox" id="check"></input>
        <label className="select-none" htmlFor='check'>Only show products in stock</label>
    </div>
  )
}

export default SearchBarWithCheckBox