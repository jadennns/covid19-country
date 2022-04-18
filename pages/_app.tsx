import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Covid-19 Country Stats"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "cv-d.png",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
