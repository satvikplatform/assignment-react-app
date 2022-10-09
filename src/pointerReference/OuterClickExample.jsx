import React from "react";

class OuterClickExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.toggleContainer = React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    onClickOutsideHandler(event) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <>
                <h1 className="text-2xl font-bold">Should Not</h1>
                <div ref={this.toggleContainer} className="mx-10 my-4">
                    <button className="border-2 border-black px-2 outline-blue-500"
                        onClick={this.onClickHandler}>Select an option 1</button>
                    {this.state.isOpen &&
                        <div className='border-blue-500 border-2 w-[20%] text-center'>
                            <button className='w-[100%] hover:bg-yellow-500 z-10'>Option 1</button><br />
                            <button>Option 2</button><br />
                            <button>Option 3</button><br />
                            <button>Option 4</button><br />
                        </div>
                    /* (
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                    ) */}
                </div>
                <div className="mx-10 my-4">
                    <button className="border-2 border-black outline-blue-500 px-2">Select an option 2</button>
                </div>
                <div className="mx-10 my-4">
                    <button className="border-2 border-black outline-blue-500 px-2">Select an option 3</button>
                </div>
                <div className="mx-10 my-4">
                    <button className="border-2 border-black outline-blue-500 px-2">Select an option 4</button>
                </div>

            </>
        );
    }
}

export default OuterClickExample;