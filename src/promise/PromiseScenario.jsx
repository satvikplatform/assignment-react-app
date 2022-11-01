import React from 'react'

const PromiseScenario = () => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("hi satvik")}, 4000);
    });
    console.log("from outside");

    p.then((message) => {console.log(message)}).catch((message) => {console.log(message)});

   
    console.log("hi");
  return (
    <div>

    </div>
  )
}

export default PromiseScenario