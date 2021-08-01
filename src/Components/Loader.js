import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 32px;
`;

const Spinner = styled(Loader)``;

export default () => (
  <Container>
    <Spinner type="Oval" color="#3498db"></Spinner>
  </Container>
);
