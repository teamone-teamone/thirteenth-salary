import styled from "styled-components";

function JobButton({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  font-weight: bold;
  width: 105px;
  height: 105px;
  border-radius: 10px;
  border-color: #666666;
  background: white;
  color: #666666;
  display: inline-block;
  padding: 0;

  &:hover {
    background: #2a1d89;
    color: white;
    transition: background-color 0.5s;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: #2a1d89;
    color: white;
  }
`;

export default JobButton;
