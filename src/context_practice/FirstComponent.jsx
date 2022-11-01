import React from 'react'
import { useState } from 'react'
import SecondComponent from './SecondComponent';
import UserContext from "./user-context.js";
import ProductContext from './product-context';
import productsInfo from '../data/products';

const FirstComponent = () => {
    const [user, setUser] = useState("satvik");
    const [items, setItems] = useState(productsInfo);
    return (
        <>

            <h1 className='text-2xl font-bold'>Hello {user}, in First Component</h1>
            <UserContext.Provider value={user}>
                <ProductContext.Provider value={items}>
                    <SecondComponent />
                </ProductContext.Provider>
            </UserContext.Provider>

        </>
    )
}

export default FirstComponent