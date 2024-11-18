import { Slides } from "@/modules/home/components";
import { useEffect, useState } from "react";
import { ArticlesPagination } from "@/modules/articles/components/ArticlesModule";
import { GetServerSideProps } from "next";
import Pagination from "@/common/components/Pagination";
import GridArticle from "@/modules/home/modules/GridArticle";

interface HomeProps {
  initialPosts: ArticlesPagination;
  search: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const page = Number(context.query.page) || 1;
  const search = context.query.search || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/articles?page=${page}&search=${search}`,
    { cache: 'no-cache' }
  );
  const data: ArticlesPagination = await response.json();
  return { props: { initialPosts: data ?? null, search: Array.isArray(search) ? search[0] : search, } };
};

export default function Home(
  initialPosts: HomeProps,
) {
  const [posts, setPosts] = useState<ArticlesPagination>(
    initialPosts.initialPosts
  );
  const [search, setSearch] = useState<string>(initialPosts.search);
  const [page, setPage] = useState<number>(
    initialPosts.initialPosts.currentPage ?? 1
  );

  const fetchPosts = async () => {
    const response = await fetch(`/api/articles?page=${page}&search=${search}`, {
      cache: 'no-cache'
    });
    const data = await response.json();
    setPosts(data ?? null);
  };

  const handlePageChange = (newPage: number) => {
    window.location.href = `?page=${newPage}&search=${search}`;
  }

  useEffect(() => {
    fetchPosts();
  }, [page, search]);

  return (
    <>
      {search ?
        (
          <section id="page-header">
            <div className="row current-cat">
              <div className="col-full">
                <h2>Seach: {search}</h2>
              </div>
            </div>
          </section>
        ) : null}
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
            {search ? null : <Slides />}
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
