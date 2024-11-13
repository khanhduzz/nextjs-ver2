import { QuoteArticle, Slides, StandardArticle } from "@/modules/home/components";
import AudioArticle from "@/modules/home/components/AudioArticle";
import Article from "@/modules/home/components/Article";
import GalleryArticle from "@/modules/home/components/GalleryArticle";
import FormatLinkArticle from "@/modules/home/components/FormatLinkArticle";

import FormatVideoArticle from "@/modules/home/components/FormatVideoArticle";
import { useEffect, useState } from "react";
import { MainArticle, PostPagination } from "@/modules/posts/PostPagination";
import { GetServerSideProps } from "next";
import Pagination from "@/common/components/Pagination";

interface HomeProps {
  initialPosts: PostPagination;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const page = Number(context.query.page) || 1;
  const search = context.query.search || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/posts?page=${page}&search=${search}`,
    { cache: 'no-cache' }
  );
  const data: PostPagination = await response.json();

  return { props: { initialPosts: data } };
};

export default function Home(
  initialPosts: HomeProps
) {
  const [posts, setPosts] = useState<PostPagination>(
    initialPosts.initialPosts
  );
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(initialPosts.initialPosts.currentPage ?? 1);

  const fetchPosts = async () => {
    const response = await fetch(`/api/posts?page=${page}&search=${search}`, {
      cache: 'no-cache'
    });
    const data = await response.json();
    setPosts(data);
  };

  const handlePageChange = (newPage: number) => {
    window.location.href = `?page=${newPage}`;
  }

  useEffect(() => {
    console.log("Page change here");
    
    fetchPosts();
  }, [page, search]);

  return (
    <>
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
            <Slides />
            {posts ? posts.data?.map((article: MainArticle, index: number) => (
              article.type === 'standard' ? (
                <Article key={index} {...article} />
              ) : article.type === 'audio' ? (
                <AudioArticle key={index} {...article} />
              ) : article.type === 'link' ? (
                <FormatLinkArticle key={index} {...article} />
              ) : article.type === 'video' ? (
                <FormatVideoArticle key={index} {...article} />
              ) : article.type === 'gallery' ? (
                <GalleryArticle key={index} {...article} />
              ) : article.type === 'quote' ? (
                <QuoteArticle key={index} {...article} />
              )
                : null
            )) :
              <article className="brick entry animate-this">
                <div className="entry-text">
                  <div className="entry-header w-full">
                    <h1 className="entry-title">There is no posts...</h1>
                  </div>
                </div>
              </article>}
          </div>
        </div>

        <Pagination
          currentPage={page}
          totalPages={posts.totalPages ?? 0}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}
