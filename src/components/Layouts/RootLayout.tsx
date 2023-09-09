import styled from "styled-components";

const RootLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: #f4f4f4;
  background: #121212;

  & div {
    border-radius: 4px;
  }
`;

export default RootLayout