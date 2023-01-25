import styled from "styled-components";

import { Heading1, Heading2, UnorderedList } from "./Headings";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 6rem;

  background-color: #494a5c;
  color: white;
  width: 100%;
  background-color: #494a5c;
  height: 256px;

  & > ul {
    display: flex;
    flex-direction: column;

    & > li {
      list-style: none;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Heading1>Chores made shorter</Heading1>
      <UnorderedList>
        <li>
          <Heading2>Legal</Heading2>
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
      </UnorderedList>
      <UnorderedList>
        <li>
          <Heading2>Company</Heading2>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </UnorderedList>
    </StyledFooter>
  );
};

export default Footer;
