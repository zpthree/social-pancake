import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ children, loading }) => {
  if (loading) return <p>Loading</p>;

  return children;
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired,
};

Loading.defaultValues = {
  loading: false,
};

export default Loading;
