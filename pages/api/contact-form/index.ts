import { ContactDTO, contacts } from "@/modules/contact/models/Contact";
import { NextApiRequest, NextApiResponse } from "next";
import { currentAuth } from "@/modules/authentication/models/UserInformation";

type Response = {
  message: string;
  data?: ContactDTO[];
  currentPage?: number;
  totalPages?: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    try {
      const { cName, cEmail, cWebsite, cMessage } = req.body as ContactDTO;

      if (!cName || !cMessage) {
        return res.status(400).json({ message: "cName and cMessage are required." });
      }

      const newContact: ContactDTO = { cName, cEmail, cWebsite, cMessage };
      contacts.push(newContact);

      return res.status(201).json({ message: "Contact added successfully." });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error." });
    }
  } else if (req.method === "GET") {

    if (!currentAuth || (currentAuth.length === 0)) {
      return res.status(401).json({ message: "Unauthorized access. Please log in." });
    }

    const { page = 1, pageSize = 10 } = req.query;
    const pageNumber = parseInt(page as string, 10) || 1;
    const size = parseInt(pageSize as string, 10) || 10;

    const startIndex = (pageNumber - 1) * size;
    const endIndex = startIndex + size;

    const paginatedContacts = contacts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(contacts.length / size);

    return res.status(200).json({
      message: "Contacts retrieved successfully.",
      data: paginatedContacts,
      currentPage: pageNumber,
      totalPages,
    });
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
