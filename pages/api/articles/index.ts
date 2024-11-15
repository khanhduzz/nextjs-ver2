import { PostPagination, fakeArticle } from "@/modules/articles/PostPagination";
import { NextApiRequest, NextApiResponse } from "next";

const POSTS_PER_PAGE = 20;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostPagination>
) {
  if (req.method === "GET") {
    try {
      const { page = 1, search = "" } = req.query;

      const currentPage = Number(page);
      const offset = (currentPage - 1) * POSTS_PER_PAGE;

      const filteredPosts = fakeArticle.filter(
        (post) =>
          post.name.toLowerCase().includes(search.toString().toLowerCase()) ||
          post.description
            .toLowerCase()
            .includes(search.toString().toLowerCase())
      );

      const paginatedPosts = filteredPosts?.slice(
        offset,
        offset + POSTS_PER_PAGE
      );

      const totalPages = Math.ceil((filteredPosts?.length ?? 0) / POSTS_PER_PAGE);      

      const paginationResponse: PostPagination = {
        message: "Posts fetched successfully",
        data: paginatedPosts,
        currentPage,
        totalPages,
      };

      return res.status(200).json(paginationResponse);
    } catch (error) {
      console.error("Error fetching posts:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
