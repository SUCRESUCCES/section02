import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { id } = router.query;
  //id는 배열로 들어옴
  // 예시: /book/1/2/3

  // console.log(id); // ['1', '2', '3']

  return <h1>Book {id}</h1>;

  // [id].jsx 는 동적 라우팅
  // [...id].jsx는 catch all seg

  // id 없이 그냥 /book으로 접근하고 싶을 때 (원래는 오류남)
  // [[...id]].jsx로 변경 : optionally catch all segments
}
