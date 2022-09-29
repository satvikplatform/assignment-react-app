import React from 'react';
import {electronicGoods, stockedElectronicProducts} from './data';
import ElectronicItems from './ElectronicItems';

const ElectronicGoods = (props) => {
  let ElectronicProducts = [];
  if(props.isChecked === false) {
    ElectronicProducts = electronicGoods.map((item,index) => {return <ElectronicItems item={item} key={index} />})
  } else {
    ElectronicProducts = stockedElectronicProducts.map((item,index) => {return <ElectronicItems item={item} key={index} />})
  }
  
  return (
    <div>
     <h1 className='text-xl font-bold'>Electronic Goods</h1>
     {ElectronicProducts}
    </div>
  )
}

export default ElectronicGoods