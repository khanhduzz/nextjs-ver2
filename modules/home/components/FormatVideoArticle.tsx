import Link from 'next/link'
import { MainArticle } from '@/modules/posts/PostPagination'

const FormatVideoArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-video animate-this">
                <div className="entry-thumb video-image">
                    <Link href={article.mediaUrl ?? ''} data-lity>
                        {article.imageUrl?.map((image, index) => (
                            <img key={index} src={image} alt={article.imageName} />
                        ))}
                    </Link>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                {article.articleCategories?.map((link, index) => (
                                    <a key={index} href={link.link ?? '#'}>{link.title}</a>
                                ))}
                            </span>
                        </div>
                        <h1 className="entry-title"><a href={`/video/${article.articleId}`}>{article.name}</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        {article.description}
                    </div>
                </div>
            </article>
        </>
    )
}

export default FormatVideoArticle