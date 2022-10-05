import React from "react";



class ChildRcc extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef();
    }
    componentDidMount() {
        this.textInput.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.textInput}/>
            </div>
        );
    };
};

export default ChildRcc;