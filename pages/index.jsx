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
            <H1>Chores made shorter</H1>
            <P>
              Get started rigth now at completely no cost. Chorter is a free
              task management app that helps you get things done.
            </P>
          </div>
          <SessionFlow />
        </Section>

        <Section isOpposite>
          <div>
            <H1>Lorem ipsum dolor</H1>
            <P>
              Curabitur suscipit odio ut porta vestibulum. Nam vitae est in
              libero commodo scelerisque at non augue.
            </P>
          </div>
          <Image
            src="/brand/logo/unknown-small.svg"
            alt="Chorter Small Logo"
            width={115}
            height={94}
          />
        </Section>

        <Section>
          <Image
            src="/brand/logo/unknown-small.svg"
            alt="Chorter Small Logo"
            width={115}
            height={94}
          />
          <div>
            <H1>Lorem ipsum dolor</H1>
            <P>
              Curabitur suscipit odio ut porta vestibulum. Nam vitae est in
              libero commodo scelerisque at non augue.
            </P>
          </div>
        </Section>

        <Section isOpposite>
          <div>
            <H1>Lorem ipsum dolor</H1>
            <P>
              Curabitur suscipit odio ut porta vestibulum. Nam vitae est in
              libero commodo scelerisque at non augue.
            </P>
          </div>
          <Image
            src="/brand/logo/unknown-small.svg"
            alt="Chorter Small Logo"
            width={115}
            height={94}
          />
        </Section>
      </StyledMain>
    </>
  );
}
