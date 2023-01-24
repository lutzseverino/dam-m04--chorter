import styled, { css } from "styled-components";

const getVariantStyle = (variant = "primary") =>
  ({
    primary: css`
        background-color: var(--primary);
        color: #fff;
    `,
    stroke: css`
        background-color: transparent;
        border: 2px solid var(--primary);
        color: var(--primary);
    `,
    secondary: css`
        background-color: var(--secondary);
        color: var(#fff);
    `,
  }[variant]);

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

const Button = styled.a`
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

    user-select: none;

    height: fit-content;

    display: inline-block;
    height: fit-content;
    border-radius: 6px;
    border: none;

    background-color: var(--primary);
    color: #fff;
    
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;

    ${({ variant }) => getVariantStyle(variant)}
    ${({ size }) => getSizeStyle(size)}

    ${({ disabled }) => {
        if (!disabled) {
        return css`
            &:hover:not(:disabled) {
            filter: brightness(0.95);
            }
            &:active:not(:disabled) {
            filter: brightness(0.9);
            }
        `;
        }
    }}
`;

export { Button };