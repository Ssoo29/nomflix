import react from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SeachPresenter = ({
  movieResults,
  tvShowResults,
  searchTerm,
  error,
  loading,
}) => null;

SeachPresenter.prototype = {
  movieResults: PropTypes.array,
  tvShowResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SeachPresenter;
