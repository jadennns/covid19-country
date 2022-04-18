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
        additionalMetaTags={[
          {
            property: "og:title",
            content: `Covid-19 Country Stats`,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: `og:url`,
            content: `https://jadenns-covid19-country.netlify.app/`,
          },
          {
            property: "og:image",
            content: "/cv-d.png",
          },
          {
            property: "og:description",
            content: `In this website, you can hover over the country on the map and check the country covid-19 statistics.`,
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
