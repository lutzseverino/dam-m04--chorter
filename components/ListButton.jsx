import styled from "styled-components";

const StyledContainerListButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// TODO: Hook with main buttons.

const StyledListButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;
  border-radius: 6px;
  border: none;

  background-color: var(--primary);
  color: #fff;

  font-family: inherit;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-weight: 500;

  z-index: 1;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: var(--primary);
    z-index: -1;
    border-radius: 9999px;
  }
`;

const ListButton = (props) => {
  return (
    <StyledContainerListButton>
      <StyledListButton {...props}></StyledListButton>
    </StyledContainerListButton>
  );
};

export default ListButton;
