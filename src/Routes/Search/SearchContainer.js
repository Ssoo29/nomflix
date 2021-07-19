import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class Search extends React.Component {
  state = {
    movieResults: null,
    tvShowResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  render() {
    const {
      movieResults,
      tvShowResults,
      searchTerm,
      error,
      loading,
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvShowResults={tvShowResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
