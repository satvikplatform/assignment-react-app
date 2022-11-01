import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const AxiosAssignment = () => {
    const [state, setState] = useState({
        isFetched: false,
        data: [],
        errorData: "",

    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => { return setState((prevState) => { return {errorData:"", isFetched: true, data: response.data}})})
    });

    const displayData = state.data.map((todo) => {
        return (
            <React.Fragment key={todo.id}>
                <p>{todo.title}</p>
                <p>{todo.id}</p>
                <hr />
            </React.Fragment>
        )
    })
    return (
        <>
            <h1 className='text-2xl font-bold m-3'>Data:</h1>
            {!state.isFetched &&
                <p className='text-xl font-bold m-3'>Loading...</p>
            }
            {displayData}
        </>
    )
}

export default AxiosAssignment;