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

  /*   useEffect(() => {
        textInput.current.focus();
    }) */
    return (
        <div>
            <ChildRcc ref={textInput} />
        {/*    <ChildRfc ref={textInput} /> */}
        </div>
    );
};

export default RefParent;