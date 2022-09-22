import React from 'react';
import productData from './data';
import ElectronicItems from './ElectronicItems';

const ElectronicGoods = () => {
  const ElectronicProducts = productData.map((item,index) => {
    if(item.category === "Electronics") {
      return <ElectronicItems item={item} key={index} />
    } 
  })
  return (
    <div>
     <h1 className='text-xl font-bold'>Electronic Goods</h1>
     {ElectronicProducts}
    </div>
  )
}

export default ElectronicGoods