import { MainArticle } from "@/modules/articles/ArticlesModule"

const QuoteArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-quote animate-this" >
                <div className="entry-thumb">
                    <blockquote>
                        <p>{article.description}</p>
                        <cite>{article.name}</cite>
                    </blockquote>
                </div>
            </article>
        </>
    )
}

export default QuoteArticle