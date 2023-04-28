import styled from "styled-components";

export const Container = styled.div`

  width: 50%;
  height: 85vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
    font-size: 25px;
    color: #8B4513;
  }
  span {
    font-weight: 500;
  }
  p {
    font-weight: 400;
    text-align: justify;
    :first-child {
      margin-bottom: 20px;
    }
  }
`