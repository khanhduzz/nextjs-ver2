import { MainArticle } from '@/modules/posts/PostPagination'
import Link from 'next/link'

const FormatLinkArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-link animate-this">
                <div className="entry-thumb">
                    <div className="link-wrap">
                        <p>{article.name}</p>
                        <cite>
                            <Link target="_blank" href={`article.mediaUrl`}>{article.description}</Link>
                        </cite>
                    </div>
                </div>
            </article>
        </>
    )
}

export default FormatLinkArticle