import { MainArticle } from "@/modules/articles/components/ArticlesModule";
import { articleData } from "@/modules/articles/components/Data";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  article?: MainArticle;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(404).json({ message: "Article not found" });
      }

      const filteredPosts = articleData.filter(
        (post) => (post.articleId ?? 0) === Number(id)
      );

      const data: Data = {
        article: filteredPosts[0],
        message: "Article fetched successfully",
      };

      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching article:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
