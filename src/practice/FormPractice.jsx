import React, { Component } from 'react';

class FormPractice extends Component {
    handleSubmitClick = () => {
        const name = this._name.value;
        // do something with `name`
    };
    render() {
        return (
            <div>
                <input type="text" ref={(input) => (this._name = input)} />
                <button onClick={this.handleSubmitClick}>Sign up</button>
            </div>
        );
    };
};

export default FormPractice;
