import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import SessionFlow from "../components/forms/SessionFlow";
import Section from "../components/Section";

import { H1 } from "../components/typography/Headings";
import P from "../components/typography/Paragraph";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledMainSection = styled(Section)`
  background-image: url("/brand/cta-bkg.svg");
  background-size: cover;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Chorter</title>
        <meta name="description" content="Chores made shorter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <StyledMainSection isColumn>
          <div>
            <H1>Chores made Shorter</H1>
            <P>
              Get started rigth now at completely no cost. Chorter is a free
              task management app that helps you get things done.
            </P>
          </div>
          <SessionFlow />
        </StyledMainSection>

        <Section>
          <P>
            Chorter is a free task management app that helps you get things
            done.
          </P>
          {/* TODO */}
        </Section>
      </StyledMain>
    </>
  );
}
