import Head from "next/head";
import NavBar from "../components/NavBar";

import styled from "styled-components";
import styles from "../styles/Main.module.css";

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

      <NavBar continued={true} />

      <StyledMain>
        {/* TODO: Migrate to styled-components */}
        <div className={styles.action}>
          <div>
            <h1>Chores made shorter</h1>
          </div>
          <div>callout</div>
        </div>
      </StyledMain>

      {/* <Footer /> */}
    </>
  );
}
