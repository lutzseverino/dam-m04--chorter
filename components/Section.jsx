import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  background-image: url(${({ image }) => image});
  background-size: cover;

  background-color: ${({ isOpposite }) =>
    isOpposite ? "var(--foreground-tone1)" : "var(--foreground)"};
`;

/**
 * max-width of 64ch to improve readability.
 */
const StyledSectionContent = styled.div`
  display: flex;

  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  padding: 96px 32px;
  max-width: 64ch;

  text-align: ${({ isColumn }) => (isColumn ? "center" : "left")};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 48px 16px;
  }
`;

export default function Section({ children, isColumn, image, isOpposite }) {
  return (
    <StyledSection image={image} isOpposite={isOpposite}>
      <StyledSectionContent isColumn={isColumn}>
        {children}
      </StyledSectionContent>
    </StyledSection>
  );
}
