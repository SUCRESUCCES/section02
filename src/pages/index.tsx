// CSS Module
import { ReactNode } from "react";
import style from "./index.module.css";

import SearchableLayout from "@/components/searchable-layout";

// Global CSS cannot be imported from files other than your Custom <App>
// 글로벌 CSS 파일은 App 컴포넌트가 아닌 곳에서는 불러올 수 없다

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

// 페이지별로 개별 레이아웃 지정하고 싶을 때
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
