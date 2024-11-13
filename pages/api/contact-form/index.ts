import { ContactDTO } from "@/modules/contact/models/Contact";
import { parse, serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

let contacts: ContactDTO[] = [];
let TOTAL_PAGE: number = 5;

type Response = {
  message: string;
  data?: ContactDTO[];
  currentPage?: number;
  totalPages?: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    try {
      const data: ContactDTO = req.body;

      if (!data.cName || !data.cMessage || !data.cEmail) {
        return res
          .status(400)
          .json({ message: "Name, Email and Message are required." });
      }

      const existingCookies = req.headers.cookie
        ? parse(req.headers.cookie)
        : {};
      const existingContacts = existingCookies.contacts
        ? JSON.parse(existingCookies.contacts)
        : [];

      const updatedContacts = Array.isArray(existingContacts)
        ? [...existingContacts, data]
        : [data];

      const cookie = serialize("contacts", JSON.stringify(updatedContacts), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        path: "/",
      });
      res.setHeader("Set-Cookie", cookie);

      return res.status(201).json({ message: "Contact added successfully." });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  } else if (req.method === "GET") {
    const { page = 1, pageSize = 10 } = req.query;
    const pageNumber = parseInt(page as string, 10) || 1;
    const size = parseInt(pageSize as string, 10) || 10;

    const startIndex = (pageNumber - 1) * size;
    const endIndex = startIndex + size;

    try {
      const existingCookies = req.headers.cookie
        ? parse(req.headers.cookie)
        : {};
      const existingContacts = existingCookies.contacts
        ? JSON.parse(existingCookies.contacts)
        : [];

      const paginatedContacts = existingContacts.slice(startIndex, endIndex);
      const totalPages = Math.ceil(existingContacts.length / size);

      return res.status(200).json({
        message: "Contacts retrieved successfully.",
        data: paginatedContacts,
        currentPage: pageNumber,
        totalPages,
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
