import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  background-image: url(${({ image }) => image});
  background-size: cover;

  background-color: ${({ color }) => color};
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

  padding: 32px 0;
  max-width: 64ch;

  text-align: ${({ isColumn }) => (isColumn ? "center" : "left")};
`;

export default function Section({ isColumn, children, image, color }) {
  return (
    <StyledSection image={image} color={color}>
      <StyledSectionContent isColumn={isColumn}>
        {children}
      </StyledSectionContent>
    </StyledSection>
  );
}
