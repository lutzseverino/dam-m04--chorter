import Image from "next/image";
import styled from "styled-components";

import Button from "./actions/Button";

import A from "./typography/Link";

const StyledNavBar = styled.nav`
  position: sticky;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;

  padding: 32px 96px;

  background-color: var(--foreground);

  @media (max-width: 768px) {
    padding: 16px 48px;
  }
`;

const NavBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

const NavBarPages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <A href="/">
        <Image
          src="/brand/logo/light-full.svg"
          alt="Chorter Full Logo"
          width={117}
          height={24}
          priority
        />
      </A>
      <NavBarLinks>
        <NavBarPages>
          <A href="/">Home</A>
          <A href="/about">About</A>
        </NavBarPages>

        <NavBarPages>
          <Button variant="stroke" href="/login">
            Log in
          </Button>
          <Button href="/signup">Sign up</Button>
        </NavBarPages>
      </NavBarLinks>
    </StyledNavBar>
  );
};

export default NavBar;
