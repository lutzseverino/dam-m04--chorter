import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledSectionContent = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  padding: 32px 0;
  width: 64ch;

  text-align: ${({ isColumn }) => (isColumn ? "center" : "left")};
`;

export default function Section({ isColumn, children }) {
  return (
    <StyledSection>
      <StyledSectionContent isColumn={isColumn}>
        {children}
      </StyledSectionContent>
    </StyledSection>
  );
}
