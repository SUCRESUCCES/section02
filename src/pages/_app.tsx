import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Component : page 역할 / pageProps : 각 페이지에서 사용하는 props

  const router = useRouter();

  const onClickButton = () => {
    // 프로그래매틱한 페이지 이동
    router.push("/test");
  };

  {
    /* Link는 프리페칭이 되었지만 onClick은 프리페칭이 안됨 */
  }

  useEffect(() => {
    router.prefetch("/test");
    // 페이지가 마운트 될 때 /test 페이지를 미리 불러온다
    // 프리페칭은 빠른 페이지 이동을 위해 제공되는 기능임
    // 프리페칭은 페이지가 마운트 될 때, 사전에 해당 페이지를 불러오는 기능
  }, []);
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        {/* 프리페칭 강제로 해지하는 방법 */}
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
