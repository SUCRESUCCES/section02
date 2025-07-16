// CSS Module
import { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = () => {
  // getServerSideProps : 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // 사전렌더링하는 과정에서 딱 한번만 실행 => 오직 서버 측에서만 실행

  // 윈도우 객체의 location, alertm confirm 등 사용 불가(window.location)

  const data = "hello";

  return {
    props: {
      data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // InferGetServerSidePropsType : getServerSideProps 함수의 반환값 타입을 자동으로 추론
  console.log(data);

  // 브라우저 측에서만 실행되는 코드 작성하고 싶을 때
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// 페이지별로 개별 레이아웃 지정하고 싶을 때
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
