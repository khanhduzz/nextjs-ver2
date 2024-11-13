import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function logout(req: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ message: "Log out successfully!" });
}
