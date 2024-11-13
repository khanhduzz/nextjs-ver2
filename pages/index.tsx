import { QuoteArticle, Slides, StandardArticle } from "@/modules/home/components";
import AudioArticle from "@/modules/home/components/AudioArticle";
import Article from "@/modules/home/components/Article";
import GalleryArticle from "@/modules/home/components/GalleryArticle";
import FormatLinkArticle from "@/modules/home/components/FormatLinkArticle";

import FormatVideoArticle from "@/modules/home/components/FormatVideoArticle";
import { useEffect, useState } from "react";
import { MainArticle, PostPagination } from "@/modules/posts/PostPagination";
import { GetServerSideProps } from "next";

interface HomeProps {
  initialPosts: PostPagination;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const page = Number(context.query.page) || 1;
  const search = context.query.search || "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/posts?page=${page}&search=${search}`);
  const data: PostPagination = await response.json();
  
  return { props: { initialPosts: data } };
};

export default function Home(initialPosts : HomeProps) {
  const [posts, setPosts] = useState<PostPagination>(initialPosts.initialPosts);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const fetchPosts = async () => {
    const response = await fetch(`/api/posts?page=${page}&search=${search}`);
    const data = await response.json();
    setPosts(data);
  };

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
            <StandardArticle />
            <AudioArticle />
            <QuoteArticle />
            <GalleryArticle />
            <FormatLinkArticle />
            <FormatVideoArticle />
            {posts.data?.map((d: MainArticle, index: number) => (
              <Article key={index} {...d} />
            ))}
          </div>
        </div>

        <div className="row">
          <nav className="pagination">
            <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <a href="#" className="page-numbers">2</a>
            <a href="#" className="page-numbers">3</a>
            <a href="#" className="page-numbers">4</a>
            <a href="#" className="page-numbers">5</a>
            <a href="#" className="page-numbers">6</a>
            <a href="#" className="page-numbers">7</a>
            <a href="#" className="page-numbers">8</a>
            <a href="#" className="page-numbers">9</a>
            <a href="#" className="page-numbers next">Next</a>
          </nav>
        </div>
      </section>
    </>
  );
}
