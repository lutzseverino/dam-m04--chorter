import styled from "styled-components";

import Button from "./Button";

const StyledListButton = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
`;

const StyledInnerListButton = styled(Button)`
  z-index: 1;

  display: flex;

  align-items: center;
  justify-content: center;

  &::before {
    z-index: -1;
    content: "";

    display: block;
    position: absolute;

    width: 100%;
    height: 2px;

    background-color: var(--primary);

    border-radius: 9999px;
  }
`;

const ListButton = (props) => {
  return (
    <StyledListButton>
      <StyledInnerListButton {...props} size="small"></StyledInnerListButton>
    </StyledListButton>
  );
};

export default ListButton;
