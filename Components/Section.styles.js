import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;

  .group {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background-color: #e0e0e0;
    width: 20px;
    height: 20px;
  }
`;
