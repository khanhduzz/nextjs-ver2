import PageNav from "@/common/components/PageNav"
import { useRouter } from "next/router"

import { useEffect, useState } from "react"
import { MainArticle } from "@/modules/articles/components/ArticlesModule"
import { GetServerSideProps } from "next"
import ArticleComment from "@/common/components/ArticleComment"
import SingleStandardArticle from "@/modules/articles/modules/SingleStandardArticle"
import SingleAudioArticle from "@/modules/articles/modules/SingleAudioArticle"
import SingleVideoArticle from "@/modules/articles/modules/SingleVideoArticle"
import SingleGalleryArticle from "@/modules/articles/modules/SingleGalleryArticle"

interface HomeProps {
    article: MainArticle;
}

type Data = {
    article: MainArticle;
    message: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
    const { id } = context.query;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/articles/${id}`,
        { cache: 'no-cache' }
    )
    const data: Data = await response.json();

    return { props: { article: data.article ?? null } };
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
        setArticle(data.article ?? null);
        
    };

    useEffect(() => {
        fetchPosts();
    }, [id])
    
    return (
        <>
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        {article ? (
                            article.type === 'standard' ? (
                                <SingleStandardArticle {...article} />
                            ) : article.type === 'audio' ? (
                                <SingleAudioArticle {...article} />
                            ) : article.type === 'video' ? (
                                <SingleVideoArticle {...article} />
                            ) : article.type === 'gallery' ? (
                                <SingleGalleryArticle {...article} />
                            ) : null
                        ) :
                            <article className="brick entry animate-this">
                                <div className="">
                                    <div className="entry-header w-full">
                                        <h1 className="entry-title">Not found</h1>
                                    </div>
                                </div>
                            </article>
                        }
                    </div>
                    <PageNav />
                </div>
                <ArticleComment />
            </section >
        </>
    )
}

export default StandardPost