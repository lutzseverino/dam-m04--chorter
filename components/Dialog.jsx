import React, { useState } from "react";

import styled from "styled-components";

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
    `
    position: fixed; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    `}

  max-width: 64ch;

  background: white;
  padding: 16px 32px;
  border-radius: 6px;
  border: 1px solid #cccccc;
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
