import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class Search extends React.Component {
  state = {
    movieResults: null,
    tvShowResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searhByTerm();
    }
  };

  searhByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({
      loading: true
    });
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvShowResults },
      } = await tvApi.search(searchTerm);
      this.setState({ 
        movieResults,
        tvShowResults
      });
    } catch (error) {
      this.setState({ error: "Can't find results" });
    } finally {
      this.setState({ loading: false });
    }
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
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
