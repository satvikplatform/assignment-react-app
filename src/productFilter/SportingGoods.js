import React from 'react';
import {sportGoods} from './data';
import { stockedSportsProducts } from './data';
import SportItems from './SportItems';

const SportingGoods = (props) => {
    let sportProducts = [];
    if(props.isChecked === false) {
        sportProducts = sportGoods.map((item,index) => { return <SportItems item={item} key={index} /> });
    } else {
        sportProducts = stockedSportsProducts.map((item,index) => { return <SportItems item={item} key={index} />})
    }
  
  
    return (
        <div className=''>
           <h1 className='text-xl font-bold'>Sporting Goods</h1>
            {sportProducts}
        </div>
    )
}

export default SportingGoods