import styled from "styled-components";
import css from "styled-jsx/css";

const headings = css`
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 700;
`;

const H1 = styled.h1`
  ${headings}
  font-size: 2rem;
`;

const H2 = styled.h2`
  ${headings}
  font-size: 1.5rem;
`;

const H3 = styled.h3`
  ${headings}
  font-size: 1.17rem;
`;

const H4 = styled.h4`
  ${headings}
  font-size: 1rem;
`;

const H5 = styled.h5`
  ${headings}
  font-size: 0.83rem;
`;

const H6 = styled.h6`
  ${headings}
  font-size: 0.67rem;
`;

// TODO: Move to own component.

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #1a1a1a;

  max-width: 64ch;
`;

const UnorderedList = styled.ul`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #1a1a1a;
`;

export { H1, H2, H3, H4, H5, H6, Paragraph, UnorderedList };
