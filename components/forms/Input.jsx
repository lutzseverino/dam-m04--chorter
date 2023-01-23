import styled from "styled-components";

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.2rem 0.4rem;

  background-color: var(--background);
  border-radius: 0.4rem;
  border: 1px solid var(--background-tone);

  font: inherit;
  color: inherit;

  &:focus {
    outline: 2px solid var(--primary);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--background-tone);
    border: 1px solid var(--background-secondary-tone);
  }
`;

export default Input;
