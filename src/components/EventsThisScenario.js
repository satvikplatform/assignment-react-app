import React from "react";

class EventsThisScenario extends React.Component {
    constructor() {
        super();
        this.state = {toggle:"ON"}
        this.toggleHandler = this.toggleHandler.bind(this);
    }

   /*  toggleHandler = () => {
        this.setState((prevState) => {return {toggle:prevState.toggle === "ON"? "OF" : "ON" }});
    } */

    toggleHandler() {
        this.setState((prevState) => {return {toggle:prevState.toggle === "ON"? "OF" : "ON" }});
    }


    render() {
        return(
            <div>
                <button onClick={this.toggleHandler}>{this.state.toggle}</button>
            </div>
        );
    };
};

export default EventsThisScenario;