import { currentAuth } from "@/modules/authentication/models/UserInformation";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function logout(req: NextApiRequest, res: NextApiResponse<Data>) {
  currentAuth.splice(0, currentAuth.length);
  return res.status(200).json({ message: "Log out successfully!" });
}
