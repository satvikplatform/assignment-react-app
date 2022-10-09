import React from 'react'
/* import { useEffect } from 'react'; */
import { useState } from 'react'

const PointerPractice = () => {
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(!show);
    }
    
    return (
        <div className='m-10'>
            <button onClick={showHandler} className='border-2 border-black px-2'>Heading 1</button><br />
            {show &&
                <div className='border-blue-500 border-2 w-[20%] text-center'>
                    <button className='w-[100%] hover:bg-yellow-500 z-10'>Option 1</button><br />
                    <button>Option 2</button><br />
                    <button>Option 3</button><br />
                    <button>Option 4</button><br />
                </div>
            }
            <button className='border-2 border-black px-2 -z-10 mt-2'>Heading 2</button><br />
            <button className='border-2 border-black px-2 mt-2'>Heading 3</button><br />

        </div>
    )
}

export default PointerPractice