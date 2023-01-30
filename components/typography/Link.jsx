import styled from "styled-components";

const A = styled.a`
  cursor: pointer;

  box-shadow: inset 0 0 0 0 #ef223c;
  color: #ef233c;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.8s ease-in-out;

  &:hover {
    color: #fff;
    box-shadow: inset 200px 0 0 0 #ef223c;
  }
`;

export default A;
