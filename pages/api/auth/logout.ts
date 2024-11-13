import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie'

type Data = {
  message: string;
};

export default function logout(req: NextApiRequest, res: NextApiResponse<Data>) {
  const cookie = serialize('session', JSON.stringify(''), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1,
    path: '/',
  })
  res.setHeader('Set-Cookie', cookie)
  return res.status(200).json({ message: "Log out successfully!" });
}
