import React from 'react';
import productData from './data';
import SportItems from './SportItems';

const SportingGoods = () => {
    const sportProducts = productData.map((item,index) => {
            if(item.category === "Sporting Goods") {
                return <SportItems item={item} key={index} />
            }
    })
    return (
        <div className=''>
           <h1 className='text-xl font-bold'>Sporting Goods</h1>
           {sportProducts}
        </div>
    )
}

export default SportingGoods