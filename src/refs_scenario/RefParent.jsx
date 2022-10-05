import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import ChildRcc from "./ChildRcc";
/* import ChildRfc from "./ChildRfc"; */

const RefParent = () => {
    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.myDisplay();
    })
    return (
        <div>
            <ChildRcc ref={textInput} />
         {/*   <ChildRfc /> */}
        </div>
    );
};

export default RefParent;