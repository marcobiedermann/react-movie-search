import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
  <h2>{props.title}</h2>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Movie;
