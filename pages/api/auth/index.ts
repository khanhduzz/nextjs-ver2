import { AuthenticationModal } from "@/modules/authentication/models/AuthenticationModel";
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthenticationModal>
) {
  if (req.method === "GET") {
    // const { username, password } = req.body;
    // console.log("Request body: ", req.body);
    // console.log("Request username: ", username);
    // if (username && password && username === "admin" && password === 'password') {
    //   return res.status(200).json({
    //     message: "User information retrieved successfully",
    //     isAuthenticated: true,
    //     user: {
    //       username: username
    //     },
    //   });

    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};

    const sessionCookie = JSON.parse(cookies.session ?? "");

    console.log("Session Cookie: ", sessionCookie);

    if (sessionCookie && sessionCookie.username && sessionCookie.password) {
      return res.status(200).json({
        message: "User information retrieved successfully",
        isAuthenticated: true,
        user: {
          username: sessionCookie.username,
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
