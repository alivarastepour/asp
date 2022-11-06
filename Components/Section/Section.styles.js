import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 30px;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .group {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background-color: #e0e0e0;
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  margin: 10px;
  .item {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-top: 10px;
    background-color: #a0a0a0;
  }
`;
