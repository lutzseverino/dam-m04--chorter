import Head from "next/head";

import NavBar from "../components/NavBar";
import Dialog from "../components/Dialog";
import Input from "../components/forms/Input";

import styled from "styled-components";
import SessionFlow from "../components/forms/SessionFlow";

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
  height: 32rem;
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

      <NavBar />

      <StyledMain>
        <StyledAction>
          <div>
            <h1>Chores made shorter</h1>
            <p>
              Chorter is a chore management app that helps you manage your time.
            </p>
          </div>
          <Dialog title={"Start your session"}>
            <SessionFlow />
          </Dialog>
        </StyledAction>
      </StyledMain>

      {/* <Footer /> */}
    </>
  );
}
