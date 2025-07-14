import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // Component : page 역할 / pageProps : 각 페이지에서 사용하는 props
  return (
    <>
      <header>글로벌헤더</header>
      <Component {...pageProps} />
    </>
  );
}
