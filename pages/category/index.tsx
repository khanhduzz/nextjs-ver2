import Pagination from "@/common/components/Pagination";
import GridArticle from "@/modules/GridArticle";
import { PostPagination } from "@/modules/posts/PostPagination";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface HomeProps {
  initialPosts: PostPagination;
  search: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const page = Number(context.query.page) || 1;
  const category = Array.isArray(context.query.category) 
    ? context.query.category[0] 
    : context.query.category || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/categories?page=${page}&category=${category}`,
    { cache: 'no-cache' }
  );
  const data: PostPagination = await response.json();

  let x: HomeProps = {
    initialPosts: data,
    search: category
  }

  return { props: x };
};

const Category = ({initialPosts, search}: HomeProps, context: string) => {
  const [posts, setPosts] = useState<PostPagination>(
    initialPosts
  );
  const [category] = useState<string>(search || '');
  const [page, setPage] = useState<number>(
    initialPosts.currentPage ?? 1
  );

  const fetchPosts = async () => {
    const response = await fetch(`/api/categories?page=${page}&category=${category}`, {
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
            : (<h1>Categories: {category}</h1>) 
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