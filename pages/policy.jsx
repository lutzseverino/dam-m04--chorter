import ReactMarkdown from "react-markdown";
import policy from "raw-loader!./policy.md";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from "../components/Headings";

import styled from "styled-components";

const StyledPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Policy() {
  return (
    <StyledPolicy>
      <div>
        <ReactMarkdown
          children={policy}
          components={{
            h1: Heading1,
            h2: Heading2,
            h3: Heading3,
            h4: Heading4,
            h5: Heading5,
            h6: Heading6,
            p: Paragraph,
          }}
        />
      </div>
    </StyledPolicy>
  );
}
