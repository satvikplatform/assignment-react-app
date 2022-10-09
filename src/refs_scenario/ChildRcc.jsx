import React from "react";

class ChildRcc extends React.Component {
    constructor(props) {
        super(props);
       /*  this.inputText = React.createRef(); */
    }
   myDisplay() {
    console.log("hello, this method called from parent component");
  /*   this.inputText.current.focus(); */
   }
    render() {
        return (
            <div>
                <input type="text" /* ref={this.inputText} *//>
            </div>
        );
    };
};

export default ChildRcc;