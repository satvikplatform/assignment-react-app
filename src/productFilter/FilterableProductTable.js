import React from 'react'
import ProductLayout from './ProductLayout'
import SearchBarWithCheckBox from './SearchBarWithCheckBox'

const FilterableProductTable = () => {
    return (
        <div className='border-2 border-red-500 w-full h-screen flex flex-col justify-center items-center'>
            <SearchBarWithCheckBox />
            <ProductLayout />
        </div>



    )
}

export default FilterableProductTable