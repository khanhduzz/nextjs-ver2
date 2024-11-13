import { AuthenticationModal } from "@/modules/authentication/models/AuthenticationModel";
import { currentAuth } from "@/modules/authentication/models/UserInformation";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthenticationModal>
) {
  
  if (req.method === "GET") {
    const user = currentAuth[0];
    if (user) {
      const parsedUser = user;
      return res.status(200).json({
        message: "User information retrieved successfully",
        isAuthenticated: true,
        user: parsedUser,
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
