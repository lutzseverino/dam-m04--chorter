import ReactMarkdown from "react-markdown";
import about from "raw-loader!./about.md";

import Section from "../../components/Section";

import { 
  H1, 
  H2, 
  H3, 
  H4, 
  H5, 
  H6 
} from "../../components/typography/Headings";
import P from "../../components/typography/Paragraph";
import UL from "../../components/typography/UnorderedList";

export default function About() {
  return (
    <Section>
      <div>
        <ReactMarkdown
          children={about}
          components={{
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            p: P,
            ul: UL,
          }}
        />
      </div>
    </Section>
  );
}
