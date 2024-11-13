import { MainArticle } from "@/modules/posts/PostPagination"

const GalleryArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-gallery group animate-this">
                <div className="entry-thumb">
                    <div className="post-slider flexslider">
                        <ul className="slides">
                            {article.imageUrl?.map((image, index) => (
                                <li>
                                    <img key={index} src={image}/>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                        <h1 className="entry-title"><a href={`/gallery/${article.articleId}`}>{article.name}</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        {article.description}
                    </div>
                </div>
            </article>
        </>
    )
}

export default GalleryArticle