import React from 'react'

const ChildRfc = React.forwardRef((props, ref) => {
    return(
        <input type="text" ref={ref} />
    );
});

export default ChildRfc;