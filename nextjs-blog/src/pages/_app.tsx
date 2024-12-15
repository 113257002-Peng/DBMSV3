import type { AppProps } from "next/app";
import DefaultLayout from "../Layout/Default";
import "../styles/global.css"; // 載入全域樣式

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
