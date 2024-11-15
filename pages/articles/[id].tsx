import PageNav from "@/common/components/PageNav"
import PrimaryContent from "@/common/components/PrimaryContent"
import { useRouter } from "next/router"

import image from '@/common/images/thumbs/single/single-01.jpg'
import CommentPost from "@/common/components/CommentPost"
import { useState } from "react"
import { MainArticle } from "@/modules/articles/PostPagination"
import { GetServerSideProps } from "next"

interface HomeProps {
    article: MainArticle;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
    const { id } = context.query;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/articles/${id}`,
        { cache: 'no-cache' }
    );
    const data: MainArticle = await response.json();

    return { props: { article: data } };
};

const StandardPost = (data: HomeProps) => {
    const router = useRouter()
    const [article, setArticle] = useState<MainArticle>(data.article);
    const { id } = router.query

    const fetchPosts = async () => {
        const response = await fetch(`/api/articles/${id}`, {
            cache: 'no-cache'
        });
        const data = await response.json();
        setArticle(data);
    };

    return (
        <>
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        <article className="format-standard">
                            <div className="content-media">
                                <div className="post-thumb">
                                    <img src={image.src} />
                                </div>
                            </div>
                            <PrimaryContent />
                        </article>
                    </div>
                    <PageNav />
                </div>
                <CommentPost />
            </section >
        </>
    )
}

export default StandardPost