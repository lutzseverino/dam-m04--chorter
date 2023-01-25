import ReactMarkdown from "react-markdown";
import privacy from "raw-loader!./privacy.md";

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  UnorderedList,
} from "../components/Headings";

import styled from "styled-components";

const StyledPrivacy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    width: 64ch;
  }
`;

export default function Privacy() {
  return (
    <StyledPrivacy>
      <div>
        <ReactMarkdown
          children={privacy}
          components={{
            h1: Heading1,
            h2: Heading2,
            h3: Heading3,
            h4: Heading4,
            h5: Heading5,
            h6: Heading6,
            p: Paragraph,
            ul: UnorderedList,
          }}
        />
      </div>
    </StyledPrivacy>
  );
}
