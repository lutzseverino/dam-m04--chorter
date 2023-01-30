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
  a {
  box-shadow: inset 0 0 0 0 #ef223c;
  color: #ef233c;
  padding: 0 .25rem;
  margin: 0 -.25rem;
  transition: color .3s ease-in-out, box-shadow .8s ease-in-out;
}
a:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #ef223c;;
}

/* Presentational styles */
a {
  color: #000000;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  text-decoration: none;
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
