import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, use, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  GetStaticPropsContext,
} from "next";

import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "@/type";

// 사전렌더링 과정에서는 쿼리스트링을 불러올 수 없다

// export const getStatciProps = async (context: GetStaticPropsContext) => {
//   // console.log(context);
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);
//   return {
//     props: {
//       books,
//     },
//   };
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      // 검색 결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
