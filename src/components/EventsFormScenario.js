import React from "react";

class EventsFormScenario extends React.Component {
        constructor() {
            super();
        }

        submitHandler = (e) => {
            e.preventDefault();
            console.log("Submit Clicked");
        }


    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};


export default EventsFormScenario;