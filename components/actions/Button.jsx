import styled, { css } from "styled-components";
import getSize from "./sizeUtils";

import A from "../typography/Link";

const getVariant = (variant) =>
  ({
    primary: css`
      background-color: var(--primary);
      color: var(--background);
    `,
    stroke: css`
      color: var(--primary);
      box-shadow: inset 0px 0px 0px 2px var(--primary);
    `,
    secondary: css`
      background-color: var(--foreground);
      color: var(--background-opposite);
    `,
  }[variant]);

const StyledActionable = css`
  display: inline-block;

  cursor: pointer;
  user-select: none;

  border-radius: 6px;
  border: none;

  opacity: 1;

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

const StyledA = styled(A)`
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
