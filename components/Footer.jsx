import styled from "styled-components";
import Image from "next/image";

import { H1, H2 } from "./typography/Headings";
import UL from "./typography/UnorderedList";

const StyledFooter = styled.footer`
  display: grid;
  place-items: left;
  grid-gap: 1rem;
  padding: 2rem 6rem;
  background-color: #494a5c;
  color: white;
  width: 100%;
  
  & > ul {
  display: grid;
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
      <H1 href="/">Chores made shorter</H1>
      <hr />
      <UL>
        <li>
          <H2>Legal</H2>
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
      </UL>
      <UL>
        <li>
          <H2>Company</H2>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </UL>
    </StyledFooter>
  );
};

export default Footer;
