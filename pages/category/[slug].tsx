import Pagination from "@/common/components/Pagination";
import { ArticlesPagination } from "@/modules/articles/ArticlesModule";
import GridArticle from "@/modules/GridArticle";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface HomeProps {
  initialPosts: ArticlesPagination;
  search: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const page = Number(context.query.page) || 1;
  const category = Array.isArray(context.query.slug) 
    ? context.query.slug[0] 
    : context.query.slug || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/categories/?page=${page}&category=${category}`,
    { cache: 'no-cache' }
  );
  const data: ArticlesPagination = await response.json();

  let x: HomeProps = {
    initialPosts: data,
    search: category
  }

  return { props: x };
};

const Category = ({initialPosts, search}: HomeProps) => {
  const [posts, setPosts] = useState<ArticlesPagination>(
    initialPosts
  );
  const [category] = useState<string>(search || '');
  const [page, setPage] = useState<number>(
    initialPosts.currentPage ?? 1
  );

  const fetchPosts = async () => {
    const response = await fetch(`/api/categories/?page=${page}&category=${category}`, {
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
  }, [page, category]);
  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            {!category ? 
            (<h1>All Categories</h1>) 
            : (<h1>Categories: {category.toLocaleUpperCase()}</h1>) 
            }
          </div>
        </div>
      </section>
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
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
  )
}

export default Category