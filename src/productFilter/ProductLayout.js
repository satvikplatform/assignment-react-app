import React from 'react'
import ElectronicGoods from './ElectronicGoods'
import SportingGoods from './SportingGoods'

const ProductLayout = (props) => {
    return (
        <>
            <div className='flex justify-between w-[250px]'>
                <p>Name</p>
                <p>Price</p>
            </div>
            <SportingGoods isChecked={props.isChecked} />
            <ElectronicGoods isChecked={props.isChecked} />
        </>
    )
}

export default ProductLayout