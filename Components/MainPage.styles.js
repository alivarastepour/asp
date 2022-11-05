import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: sans-serif;

  .section {
    border: 1px solid black;
  }
`;
