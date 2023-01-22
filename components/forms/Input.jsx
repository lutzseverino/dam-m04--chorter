import styled from "styled-components";

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.4rem;

  background-color: white;
  border-radius: 0.4rem;
  border: 2px solid #cccccc;

  font: inherit;
  color: inherit;

  &:focus {
    outline: none;
    border: 2px solid #999999;
  }
`;

export default Input;
