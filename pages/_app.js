import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";

import Layout from "../app/Layout";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <style jsx global>{`
          html {
            font-family: ${spaceGrotesk.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
