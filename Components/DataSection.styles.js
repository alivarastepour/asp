import styled from "styled-components";

export const Container = styled.div`
  .title {
    text-align: center;
  }

  .action-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  }

  .action {
    width: 70px;
    height: 40px;
    font-size: 1rem;
    background-color: #aba89b;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
