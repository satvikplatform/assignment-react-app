import React from 'react'
import ElectronicGoods from './ElectronicGoods'
import SportingGoods from './SportingGoods'

const ProductLayout = () => {
    return (
        <>
            <div className='flex justify-between w-[250px]'>
                <p>Name</p>
                <p>Price</p>
            </div>
            <SportingGoods />
            <ElectronicGoods />
        </>
    )
}

export default ProductLayout