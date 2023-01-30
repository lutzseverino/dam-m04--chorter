import styled, { css } from "styled-components";
import getSize from "./sizeUtils";

const getVariant = (variant) =>
  ({
    primary: css`
      background-color: var(--primary);
      color: #fff;
    `,
    stroke: css`
      background-color: transparent;
      box-shadow: inset 0px 0px 0px 2px var(--primary);
      color: var(--primary);
    `,
    secondary: css`
      background-color: var(--secondary);
      color: #000;
    `,
  }[variant]);

const StyledActionable = css`
  display: inline-block;

  cursor: pointer;
  user-select: none;

  border-radius: 6px;
  border: none;

  opacity: 1;
  background-color: var(--primary);
  color: #fff;

  font-weight: bold;

  ${({ variant }) => getVariant(variant)}

  ${({ size }) => getSize(size)}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: "not-allowed";
        opacity: 0.5;
      `;
    } else {
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

const StyledButton = styled.button`
  ${StyledActionable}
`;

const StyledA = styled.a`
  ${StyledActionable}
`;

const Button = (props) => {
  const { variant = "primary", size = "medium", isButton } = props;

  return (
    <>
      {isButton ? (
        <StyledButton {...props} variant={variant} size={size}></StyledButton>
      ) : (
        <StyledA {...props} variant={variant} size={size}></StyledA>
      )}
    </>
  );
};

export default Button;
