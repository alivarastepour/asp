import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: sans-serif;

  .section {
    width: 40%;
    min-width: 500px;
    height: 100%;
    border-radius: 10px;
    background-color: #e0e0e0;
  }
`;
