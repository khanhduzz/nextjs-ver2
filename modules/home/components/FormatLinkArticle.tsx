import { MainArticle } from '@/modules/articles/ArticlesModule'

const FormatLinkArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-link animate-this">
                <div className="entry-thumb">
                    <div className="link-wrap">
                        <p>{article.name}</p>
                        <cite>
                            <a target="_blank" href={`article.mediaUrl`}>{article.description}</a>
                        </cite>
                    </div>
                </div>
            </article>
        </>
    )
}

export default FormatLinkArticle