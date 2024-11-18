import { Article, AudioArticle, FormatLinkArticle, FormatVideoArticle, GalleryArticle, QuoteArticle } from "./home/components"
import { MainArticle, ArticlesPagination } from "./articles/ArticlesModule"

type GridArticleProps = {
    posts: ArticlesPagination
}

const GridArticle = (data: GridArticleProps) => {
    return (
        <>
            {(data.posts.data && data.posts.data.length > 0) ? data.posts.data?.map((article: MainArticle, index: number) => (
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
                    <div className="">
                        <div className="entry-header w-full">
                            <h1 className="entry-title">There is no posts...</h1>
                        </div>
                    </div>
                </article>}
        </>
    )
}

export default GridArticle