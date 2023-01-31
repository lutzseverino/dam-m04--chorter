import styled from "styled-components";

import { H1, H3 } from "./typography/Headings";
import UL from "./typography/UnorderedList";
import A from "./typography/Link";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 32px 96px;

  background-color: var(--foreground-opposite);
  color: var(--background);

  @media (max-width: 768px) {
    padding: 16px 48px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <H1>Chores made shorter</H1>
      <FooterLinks>
        <div>
          <H3>Legal</H3>
          <UL>
            <li>
              <A href="/legal/terms">Terms of Service</A>
            </li>
            <li>
              <A href="/legal/privacy">Privacy Policy</A>
            </li>
          </UL>
        </div>
        <div>
          <H3>Company</H3>
          <UL>
            <li>
              <A href="/about">About</A>
            </li>
            <li>
              <A href="/contact">Contact</A>
            </li>
          </UL>
        </div>
      </FooterLinks>
    </StyledFooter>
  );
};

export default Footer;
