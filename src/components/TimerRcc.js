import React from "react";



class TimerRcc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: this.props.startVal}
    }
    secIncrement = () => {
        // this.setState((prevState) => {return {seconds: prevState.seconds + 1,}});
        this.setState({seconds: this.state.seconds + 1});
    }
    render() {
        return(
            <>
                <h1>Seconds : {this.state.seconds}</h1>
            </>
        );
    };
    componentDidMount() {
        setInterval(this.secIncrement, 1000);
    }
    componentWillUnmount() {
        console.log("seconds closing");
    }
};


export default TimerRcc;



