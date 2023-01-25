import Head from "next/head";

import SessionFlow from "../components/forms/SessionFlow";

import { Heading1, Paragraph } from "../components/Headings";

import styled from "styled-components";
import Footer from "../components/Footer";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledAction = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  min-height: 32rem;
  padding: 2rem 6rem;

  background-image: url("/brand/cta-bkg.svg");
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
            <Heading1>Chores made Shorter</Heading1>
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
