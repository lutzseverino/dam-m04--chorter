import Image from "next/image";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 6rem;
  width: 100%;
  background-color: ${(props) =>
    props.continued ? "var(--background-tone)" : "var(--background)"};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    a {
      gap: 1rem;
    }
  }
`;

const NavBar = ({ continued }) => {
  return (
    <StyledNav continued={continued}>
      <a href="#/">
        <Image
          src="/chorter-light-full.svg"
          alt="Chorter Full Logo"
          width={117}
          height={24}
          priority
        />
      </a>
      <div>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
        </div>
        <div>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </StyledNav>
  );
};

export default NavBar;
