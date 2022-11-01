import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';


const FetchAssignment = () => {
    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodoData(data)).catch(e => console.log(e.message));
    });

    const displayData = todoData.map((data) => {return <TodoItems key={data.id} data={data} />})

    return (
        <>
          {displayData}
        </>
    )
}

export default FetchAssignment;