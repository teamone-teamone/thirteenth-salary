import styled,{ css } from "styled-components";

function Button({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  /* margin: 10px; */
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  font-weight: var(--button-font-weight, 700);
  padding: var(--button-padding, 10px 3px ); 
  width: 300px;
  height: 50px;
  border-radius: var(--button-radius, 10px);
  border-color: var(--button-bd-color, #2A1D89);
  background: var(--button-bg-color, white);
  color: var(--button-color, #2A1D89);
  display: block;
  margin: auto;

  
  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #2A1D89);
    color: var(--button-color, white);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #2A1D89);
  }
`;

export default Button;