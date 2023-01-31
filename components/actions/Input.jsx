import styled from "styled-components";
import getSize from "./sizeUtils";

const StyledInput = styled.input`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: var(--foreground);

  border-radius: 6px;
  border: none;

  box-shadow: inset 0px 0px 0px 1px var(--foreground-border);

  ${({ size }) => getSize(size)}

  &:focus {
    outline: 2px solid var(--primary);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Input = (props) => {
  const { size = "medium" } = props;

  return <StyledInput {...props} size={size} />;
};

export default Input;
