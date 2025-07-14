import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // Component : page 역할 / pageProps : 각 페이지에서 사용하는 props

  const router = useRouter();

  const onClickButton = () => {
    // 프로그래매틱한 페이지 이동
    router.push("/test");
    // push() : 현재 페이지를 스택에 추가하고 새로운 페이지로 이동
    // replace(): 현재 페이지를 스택에 추가하지 않고 새로운 페이지로 이동
    // back():  이전 페이지로 이동
  };
  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
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
