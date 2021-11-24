import styled from "styled-components";

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
  background: white;
  color: #2a1d89;
  margin: 5%;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: white;
    color: #2a1d89;
  }
`;

export default function WhiteButton({ disabled, children }) {
  return <Button disabled={disabled}>{children}</Button>;
}
