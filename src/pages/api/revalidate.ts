import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 인덱스 페이지를 요청 받았을 때 revalidate(재생성)시켜주기
  try {
    await res.revalidate("/"); // 경로 설정(인덱스페이지 한 것임)
    return res.json({ revalidate: true });
  } catch (err) {
    res.status(500).send("Revalidation Failed");
  }
}
