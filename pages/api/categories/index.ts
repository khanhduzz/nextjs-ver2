import { ArticlesPagination } from "@/modules/articles/components/ArticlesModule";
import { articleData } from "@/modules/articles/components/Data";
import { NextApiRequest, NextApiResponse } from "next";

const POSTS_PER_PAGE = 10;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticlesPagination>
) {
  if (req.method === "GET") {
    try {
      const { page = 1, category = "" } = req.query;
      console.log(req.query);

      const currentPage = Number(page);
      const offset = (currentPage - 1) * POSTS_PER_PAGE;
      let filteredPosts = articleData;

      if (category != "") {
        filteredPosts = articleData.filter((post) => {
          const matchingCategory = post.articleCategories?.some((cat) =>
            cat.title
              .toLowerCase()
              .trim()
              === (category.toString().toLowerCase().trim())
          );
          return Boolean(matchingCategory);
        });
      }

      const paginatedPosts = filteredPosts?.slice(
        offset,
        offset + POSTS_PER_PAGE
      );

      const totalPages = Math.ceil(
        (filteredPosts?.length ?? 0) / POSTS_PER_PAGE
      );

      const paginationResponse: ArticlesPagination = {
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
