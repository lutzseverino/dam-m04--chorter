import Image from "next/image";
import styled from "styled-components";

import Button from "./actions/Button";

const StyledNav = styled.nav`
  position: sticky;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  padding: 2rem 6rem;
  width: 100%;

  background-color: var(--background);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    & > * {
      display: flex;
      gap: 1rem;
    }
  }
`;

const NavBar = ({ continued }) => {
  return (
    <StyledNav continued={continued}>
      <a href="/">
        <Image
          src="/brand/logo/light-full.svg"
          alt="Chorter Full Logo"
          width={117}
          height={24}
          priority
        />
      </a>
      <div>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
        <div>
          <Button variant="stroke" href="/login">
            Log in
          </Button>
          <Button href="/signup">Sign up</Button>
        </div>
      </div>
    </StyledNav>
  );
};

export default NavBar;
