import Button from "@components/Button";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
const logo = require("@assets/logo/light-full.svg").default;

interface NavbarProps {
  hidden?: boolean;
}

const NavbarContainer = styled.nav<NavbarProps>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  padding: 0 1rem;

  border-bottom: 2px solid var(--light-shade);

  background-color: var(--light);

  transition: transform 0.2s ease-in-out;

  ${({ hidden }) => {
    if (hidden) {
      return css`
        transform: translateY(-100%);
      `;
    }
  }}
`;

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < 200;

    setHidden(!visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContainer hidden={hidden}>
      <a href="/" style={{ height: "50%" }}>
        <img src={logo} alt="Logo" style={{ height: "100%" }} />
      </a>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button variant="secondary">Log in</Button>
        <Button>Sign up</Button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
