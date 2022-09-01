import React from "react";


class TimerRcc extends React.Component {
    constructor() {
        super();
        this.state = {seconds:0}
    }

     secIncrement = () => {
        this.setState({seconds: this.state.seconds + 1});
    }
    componentDidMount() {
        this.interval = setInterval(() => {this.secIncrement()},1000);
    }
    
    render() {
        return(
            <>
                <h1>You came to this site at {this.state.seconds} seconds ago</h1>
              {/*   <button onClick={this.secIncrement}>Increment</button> */}
            </>
        );
    };
};

export default TimerRcc;