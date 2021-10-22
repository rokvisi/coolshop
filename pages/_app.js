import "../styles/globals.css";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { StoreProvider } from "../components/Store";
import Router from "next/router";

Router.events.on("routerChangeStart", () => nProgress.start());
Router.events.on("routerChangeComplete", () => nProgress.done());
Router.events.on("routerChangeError", () => nProgress.done());

export default function MyApp({ Component, pageProps }) {
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
