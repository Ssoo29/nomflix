import React from "react";
import styled from "styled-components";
import ReactLoader from "react-loader-spinner";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 32px;
`;

const Spinner = styled(ReactLoader)``;

const Loader = () => (
  <Container>
    <Spinner type="Oval" color="#3498db"></Spinner>
  </Container>
);

export default Loader;