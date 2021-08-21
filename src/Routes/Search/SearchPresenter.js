import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0 20px;
  margin-top: 30px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SeachPresenter = ({
  movieResults,
  tvShowResults,
  searchTerm,
  handleSubmit,
  updateTerm,
  error,
  loading,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows.."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <>
      <Loader />
      <Helmet>
      <title>Loading</title>
      </Helmet>
      </>
    ) : (
      <>
        <Helmet>
          <title>Search | Nomflix</title>
        </Helmet>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {tvShowResults && tvShowResults.length > 0 && (
          <Section title="TV Show Results">
            {tvShowResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                isMovie={true}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message color="#c0392b" text={error} />}
        {tvShowResults &&
          movieResults &&
          tvShowResults.length === 0 &&
          movieResults.length === 0 && (
            <Message color="#7f8c8d" text="Nothing found" />
          )}
      </>
    )}
  </Container>
);

SeachPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvShowResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SeachPresenter;
