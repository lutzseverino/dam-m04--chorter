import styled, { css } from "styled-components";

interface ButtonProps {
  disabled?: boolean;
  variant?: string;
  size?: string;
}

const getVariantStyle = (style = "primary") =>
  ({
    stroke: css`
      background-color: var(--light);
      box-shadow: inset 0 0 0 2px var(--primary);
      color: var(--primary);
    `,
    secondary: css`
      background-color: var(--light-shade);
      color: var(--dark);
    `,
  }[style]);

const getSizeStyle = (size = "medium") =>
  ({
    small: css`
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    `,
    medium: css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `,
    large: css`
      font-size: 1.25rem;
      padding: 0.75rem 1.5rem;
    `,
  }[size]);

const Button = styled.button<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition: filter 0.1s ease-in-out;

  height: fit-content;

  border: none;
  border-radius: 4px;

  background-color: var(--primary);

  color: var(--light);
  font-weight: bold;
  font-family: inherit;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ variant }) => getVariantStyle(variant)}
  ${({ size }) => getSizeStyle(size)}

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:active:not(:disabled) {
    filter: brightness(0.8);
  }
`;

export default Button;
