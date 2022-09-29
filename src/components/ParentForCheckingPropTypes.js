import React from 'react';
import PropTypes from 'prop-types';

const ParentForCheckingPropTypes = (props) => {
  return (
    <div>hello{props.name}</div>
  );
};

ParentForCheckingPropTypes.propTypes =  {
  name: PropTypes.string
};


export default ParentForCheckingPropTypes