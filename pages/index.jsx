import Head from "next/head";

import SessionFlow from "../components/forms/SessionFlow";

import { H1, Paragraph } from "../components/Headings";

import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  text-align: center;

  width: 100%;
  min-height: 512px;
  padding: 2rem 6rem;

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
        <StyledAction>
          <div>
            <H1>Chores made Shorter</H1>
            <Paragraph>
              Get started rigth now at completely no cost. Chorter is a free
              task management app that helps you get things done.
            </Paragraph>
          </div>
          <SessionFlow />
        </StyledAction>
      </StyledMain>
    </>
  );
}
