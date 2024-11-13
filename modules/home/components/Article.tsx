import { MainArticle } from '@/modules/posts/PostPagination';
import Link from 'next/link';

const Article = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry animate-this">
                <div className="entry-thumb">
                    <Link href="standard/1" className="thumb-link">
                        {article.imageUrl?.map((image, index) => (
                            <img key={index} src={image} alt={article.imageName} />
                        ))}
                    </Link>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                {article.articleCategories.map((link, index) => (
                                    <a key={index} href={link.link ?? '#'}>{link.title}</a>
                                ))}
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-standard.html">{article.name}</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        {article.description}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Article