import Head from "next/head";
import styled from "styled-components";

import SessionFlow from "../components/forms/SessionFlow";
import Section from "../components/Section";

import { H1 } from "../components/typography/Headings";
import P from "../components/typography/Paragraph";
import Image from "next/image";

const StyledMain = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
        <Section isColumn image={"/brand/cta-bkg.svg"}>
          <div>
            <H1>Chores made Shorter</H1>
            <P>
              Get started rigth now at completely no cost. Chorter is a free
              task management app that helps you get things done.
            </P>
          </div>
          <SessionFlow />
        </Section>

        <Section isOpposite>
          <div>
            <H1>Free tastes better</H1>
            <P>
              Chorter is a free task management app that helps you get things
              done.
            </P>
          </div>
          <Image
            src="/brand/logo/dark-small.svg"
            alt="Chorter Small Logo"
            width={115}
            height={94}
          />
        </Section>

        <Section>
          <Image
            src="/brand/100.svg"
            alt="Chorter Small Logo"
            width={237.03}
            height={69.89}
          />
          <div>
            <H1>Don't let yourself fail</H1>
            <P>
              Help yourself complete your tasks by creating a list of chores and
              letting Chorter help you get things done.
            </P>
          </div>
        </Section>
      </StyledMain>
    </>
  );
}
