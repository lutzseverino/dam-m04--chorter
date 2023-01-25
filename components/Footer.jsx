import styled from "styled-components";

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
      <h1>Chores made shorter</h1>
      <ul>
        <li>
          <h2>Legal</h2>
        </li>
        <li>
          <a href="/policy">Privacy</a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Company</h2>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
