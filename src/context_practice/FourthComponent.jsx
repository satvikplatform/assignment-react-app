import React, { Fragment, useContext } from 'react';
import ProductContext from './product-context';
import UserContext from './user-context';



const FourthComponent = () => {
    const user = useContext(UserContext);
    const products = useContext(ProductContext);
    let displayProducts = products.map((item) => {
        return (
            <Fragment key={item.id}>
                <li>name: {item.productName}</li>
                <li>id: {item.id}</li>
                <li>price: {item.price}</li>
                <hr />
            </Fragment>
        )
    })
    return (
        <>
            <h1 className='text-2xl font-bold'>Hello {user}, in Fourth Component</h1>
            <hr />
            <ul>
                {displayProducts}
            </ul>
        </>
    )
}

export default FourthComponent