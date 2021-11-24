import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  padding: 10px 3px;
  width: 232px;
  height: 48px;
  border-radius: 10px;
  border-color: #2a1d89;
  background: #2a1d89;
  color: white;
  margin: 5%;
`;

export default function BlueButton({ children }) {
  return <Button>{children}</Button>;
}
