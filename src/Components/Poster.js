import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.3s ease-in-out;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  transition: opacity 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ imageUrl, title, id, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPoster.PNG")
          }
        >
          <Rating>
            <span role="img" aria-label="rating">
              ✨
            </span>
            {rating}/10
          </Rating>
        </Image>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
