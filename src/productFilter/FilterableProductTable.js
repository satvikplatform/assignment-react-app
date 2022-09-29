import React from 'react'
import { useState } from 'react'
import ProductLayout from './ProductLayout'
import SearchBarWithCheckBox from './SearchBarWithCheckBox'

const FilterableProductTable = () => {
    const[state, setState] = useState({
        checked: false,
    });
    
    const checkBoxVal = (val) => {
       setState(() => {return { checked: val}});
    }
    return (
        <div className='border-2 border-red-500 w-full h-screen flex flex-col justify-center items-center'>
            <SearchBarWithCheckBox checked={state.checked} checkBoxVal={checkBoxVal} />
            <ProductLayout isChecked={state.checked} />
        </div>



    )
}

export default FilterableProductTable