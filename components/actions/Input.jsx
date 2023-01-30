import styled from "styled-components";
import getSize from "./sizeUtils";

const StyledInput = styled.input`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: var(--background);

  border-radius: 6px;
  border: none;

  box-shadow: inset 0px 0px 0px 1px var(--background-tone);

  ${({ size }) => getSize(size)}

  &:focus {
    outline: 2px solid var(--primary);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--background-tone);
    box-shadow: inset 0px 0px 0px 1px var(--background-secondary-tone);
  }
`;

const Input = (props) => {
  const { size = "medium" } = props;

  return <StyledInput {...props} size={size} />;
};

export default Input;
