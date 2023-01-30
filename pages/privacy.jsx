import ReactMarkdown from "react-markdown";
import privacy from "raw-loader!./privacy.md";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
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
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            p: Paragraph,
            ul: UnorderedList,
          }}
        />
      </div>
    </StyledPrivacy>
  );
}
