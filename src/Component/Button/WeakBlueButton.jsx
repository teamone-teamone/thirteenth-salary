import styled,{ css } from "styled-components";

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem; 
  font-weight: bold; 
  padding: 10px 3px; 
  width: 232px;
  height: 48px;
  border-radius: 10px;  
  border-color: rgba(42, 29, 137, 0.5);
  background: rgba(42, 29, 137, 0.5);
  color: white;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: rgba(42, 29, 137, 0.5);
    color: white;
  }
`;


export default function WeakBlueButton({ disabled, children }) {
  return (
    <Button disabled={disabled}>{children}</Button>
  );
}