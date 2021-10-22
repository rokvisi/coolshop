import "../styles/globals.css";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { StoreProvider } from "../components/Store";
import Router from "next/router";
import { useEffect } from "react";

Router.events.on("routerChangeStart", () => nProgress.start());
Router.events.on("routerChangeComplete", () => nProgress.done());
Router.events.on("routerChangeError", () => nProgress.done());

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  };
};
