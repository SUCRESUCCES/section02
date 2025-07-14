import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // 모든 페이지에 공통적으로 적용되는 HTML 구조를 정의
  // 모든 페이지에 적용되어야 하는 메타 태그, 스타일, 캐릭터 셋 등을 설정
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
