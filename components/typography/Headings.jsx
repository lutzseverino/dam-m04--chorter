import styled from "styled-components";
import css from "styled-jsx/css";

/**
 * Heading sizes inspired by Bootstrap 5
 * https://getbootstrap.com/docs/5.0/content/typography/#headings
 */

const headings = css`
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 700;
`;

const H1 = styled.h1`
  ${headings}
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  ${headings}
  font-size: 2rem;
`;

const H3 = styled.h3`
  ${headings}
  font-size: 1.75rem;
`;

const H4 = styled.h4`
  ${headings}
  font-size: 1.5rem;
`;

const H5 = styled.h5`
  ${headings}
  font-size: 1.25rem;
`;

const H6 = styled.h6`
  ${headings}
  font-size: 1rem;
`;

export { H1, H2, H3, H4, H5, H6 };
