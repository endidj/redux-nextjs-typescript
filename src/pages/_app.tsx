import "../styles/globals.css";
import type { AppProps } from "next/app";

// Redux 적용 step.1 (for Next.js)
import reduxWrapper from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Redux 적용 step.2 (for Next.js)
export default reduxWrapper.withRedux(MyApp);
