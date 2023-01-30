import ReactMarkdown from "react-markdown";
import privacy from "raw-loader!./privacy.md";

import Section from "../../../components/Section";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "../../../components/typography/Headings";
import Paragraph from "../../../components/typography/Paragraph";
import UnorderedList from "../../../components/typography/UnorderedList";

export default function Privacy() {
  return (
    <Section>
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
    </Section>
  );
}
