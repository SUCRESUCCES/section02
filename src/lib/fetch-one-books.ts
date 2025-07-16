import { BookData } from "@/type";

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
    // 한 권을 불러오니 배열 형태X, 오류가 생기면 null값 반환되게 함
  }
}
