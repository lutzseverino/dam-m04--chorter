import styled from "styled-components";

import { H2, H3 } from "./typography/Headings";
import UL from "./typography/UnorderedList";
import A from "./typography/Link";

const StyledFooter = styled.footer`
  display: grid;

  padding: 32px 96px;

  grid-template-rows: 1fr 1fr;

  background-color: #2b2d42;
  color: white;
`;

const FooterNav = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

function Footer() {
  return (
    <StyledFooter>
      <H2>Chores made shorter</H2>
      <FooterNav>
        <div>
          <H3>Legal</H3>
          <UL>
            <li>
              <A href="/legal/privacy">Privacy</A>
            </li>
          </UL>
        </div>
        <div>
          <H3>Company</H3>
          <UL>
            <li>
              <A href="/about">About</A>
            </li>
          </UL>
        </div>
        <div>
          <H3>Lorem</H3>
          <UL>
            <li>
              <A>Ipsum</A>
              <A>Dolor</A>
            </li>
          </UL>
        </div>
      </FooterNav>
    </StyledFooter>
  );
}

export default Footer;
