// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// API Routes
// API 응답을 정의하는 파일

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
