import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  transition: filter 0.1s ease-in-out;

  cursor: pointer;

  background-color: var(--primary);

  border: none;
  border-radius: 4px;

  color: var(--light);
  font-weight: bold;
  font-family: inherit;

  padding: 0.5rem 1rem;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:active:not(:disabled) {
    filter: brightness(0.8);
  }
`;

export const ButtonStroke = styled(Button)`
  background-color: var(--light);

  border: 2px solid var(--primary);

  color: var(--primary);
`;

export const ButtonSecondary = styled(Button)`
  background-color: var(--light-shade);

  color: var(--dark);
`;

export default Button;
