import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
