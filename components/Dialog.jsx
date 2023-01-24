import styled from "styled-components";

const StyledDialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 2rem;

  background-color: white;
  border-radius: 6px;
  border: 1px solid #cccccc;

  max-width: 65ch;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Dialog = ({ title, children, closeable, onClose }) => {
  return (
    <StyledDialog>
      <StyledHeader>
        <h2>{title}</h2>
        {closeable && <button onClick={onClose}></button>}
      </StyledHeader>
      {children}
    </StyledDialog>
  );
};

Dialog.defaultProps = {
  onClose: () => {},
};

export default Dialog;
