import GlobalLayout from "@/components/global-layout";

import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  // getLayout이 추가되지 않은 페이지에서는 별도의 레이아웃이 적용되지 않도록 예외처리

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
