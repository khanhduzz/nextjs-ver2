import { AuthenticationModal } from "@/modules/authentication/models/AuthenticationModel";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthenticationModal>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log("Request body: ", req.body);
    console.log("Request username: ", username);
    if (username && password && username === "admin" && password === 'password') {
      return res.status(200).json({
        message: "User information retrieved successfully",
        isAuthenticated: true,
        user: {
          username: username
        },
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
