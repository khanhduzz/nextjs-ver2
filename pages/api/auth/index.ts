import { AuthenticationModal } from "@/modules/authentication/models/AuthenticationModel";
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthenticationModal>
) {
  if (req.method === "GET") {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const sessionCookie = cookies.session;
    if (sessionCookie) {
      const auth = JSON.parse(sessionCookie)
      return res.status(200).json({
        message: "User information retrieved successfully",
        isAuthenticated: true,
        user: {
          username: auth.username,
        },
      });
    } else {
      return res.status(401).json({
        message: "User is not authenticated",
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
