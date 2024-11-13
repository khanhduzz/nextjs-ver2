import { AuthenticationModal } from "@/modules/authentication/models/AuthenticationModel";
import { UserInformation } from "@/modules/authentication/models/UserInformation";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie'

const validateUser = async (username: string, password: string) => {
  const mockUser = {
    username: "admin",
    password: "password",
  };

  return username === mockUser.username && password === mockUser.password;
};

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<AuthenticationModal>
) {
  console.log(req.method);

  switch (req.method) {
    case "POST":
      const loginInfo: UserInformation = req.body;
      if (!loginInfo.username || !loginInfo.password) {
        return res
          .status(400)
          .json({ message: "Missing username or password" });
      }

      try {
        const isValid = await validateUser(
          loginInfo.username,
          loginInfo.password
        );

        if (isValid) {
          const cookie = serialize('session', JSON.stringify(loginInfo), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
          })
          res.setHeader('Set-Cookie', cookie)
          
          return res.status(200).json({
            message: "Login successful",
            isAuthenticated: true,
            user: { username: loginInfo.username },
          });
        } else {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }
      } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    default:
      res.setHeader("Allow", ["POST"]);
      return res
        .status(405)
        .json({ message: `Method ${req.method} not allowed` });
  }
}
