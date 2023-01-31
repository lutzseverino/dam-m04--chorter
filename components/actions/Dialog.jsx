import React, { useState } from "react";
import styled, { css } from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);
`;

const StyledDialog = styled.div`
  ${({ floating }) =>
    floating &&
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  padding: 16px 32px;

  max-width: 64ch;

  background: var(--background);

  border-radius: 6px;
  border: 1px solid var(--background-border);
`;

const Dialog = ({ onClose, children, floating }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    if (onClose) onClose();

    setIsVisible(false);
  };

  return (
    isVisible && (
      <>
        {floating && <StyledBackdrop onClick={handleClose} />}
        <StyledDialog floating={floating}>
          {children}
          {onClose &&
            {
              /* TODO: Close button */
            }}
        </StyledDialog>
      </>
    )
  );
};

export default Dialog;
