import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import TodoItems from './TodoItems';

const FetchScenario = () => {
    const [arrayData, setArrayData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setArrayData(data))
    }, []);

    

    /* let displayArrayData = arrayData.map((item) => {
        return (
            <>
                <li key={item.id}>{item.title}</li>
                <li key={item.id}>{item.id}</li>
                <hr />
            </>
        )
    }); */

    let displayArrayData = arrayData.map((item) => { return <TodoItems key={item.id} item={item} /> });


    return (
        <>
            <h1>These below data was fetched</h1>
            <ul>
                {displayArrayData}
            </ul>
           
        {/* <ul>
                {displayArrayData}
            </ul> */}


        </>



    )
}

export default FetchScenario