import { Slides } from "@/modules/home/components";
import { useEffect, useState } from "react";
import { ArticlesPagination } from "@/modules/articles/components/ArticlesModule";
import { GetServerSideProps } from "next";
import Pagination from "@/common/components/Pagination";
import GridArticle from "@/modules/home/modules/GridArticle";

interface HomeProps {
  initialPosts: ArticlesPagination;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const page = Number(context.query.page) || 1;
  const search = context.query.search || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/articles?page=${page}&search=${search}`,
    { cache: 'no-cache' }
  );
  const data: ArticlesPagination = await response.json();

  return { props: { initialPosts: data } };
};

export default function Home(
  initialPosts: HomeProps
) {
  const [posts, setPosts] = useState<ArticlesPagination>(
    initialPosts.initialPosts
  );
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(
    initialPosts.initialPosts.currentPage ?? 1
  );

  const fetchPosts = async () => {
    const response = await fetch(`/api/articles?page=${page}&search=${search}`, {
      cache: 'no-cache'
    });
    const data = await response.json();
    setPosts(data);
  };

  const handlePageChange = (newPage: number) => {
    window.location.href = `?page=${newPage}`;
  }

  useEffect(() => {
    fetchPosts();
  }, [page, search]);

  return (
    <>
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
            <Slides />
            <GridArticle posts={posts} />
          </div>
        </div>
        <Pagination
          currentPage={page}
          totalPages={posts?.totalPages ?? 0}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}
