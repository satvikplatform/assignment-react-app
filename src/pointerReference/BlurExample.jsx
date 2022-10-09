import React from "react";

class BlurExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    }

    // If a child receives focus, do not close the popover.
    onFocusHandler() {
        clearTimeout(this.timeOutId);
    }

    render() {
        // React assists us by bubbling the blur and
        // focus events to the parent.
        return (
            <>
                <h1 className="text-2xl font-bold">Should </h1>
                <div onBlur={this.onBlurHandler}
                    onFocus={this.onFocusHandler}
                    className="mx-10 my-4">
                    <button onClick={this.onClickHandler}
                        className="border-2 border-black px-2 outline-blue-500"
                        aria-haspopup="true"
                        aria-expanded={this.state.isOpen}>
                        Select an option 1
                    </button>
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

export default BlurExample;