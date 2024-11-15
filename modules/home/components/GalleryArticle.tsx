import { MainArticle } from "@/modules/articles/PostPagination"
import Image from 'next/image'
import Link from "next/link"

const GalleryArticle = (article: MainArticle) => {
    
    return (
        <>
            <article className="brick entry format-gallery group animate-this">
                <div className="entry-thumb">
                    <div className="post-slider flexslider">
                        <ul className="slides">
                            {article.imageUrl?.map((image, index) => (
                                <li key={index}>
                                    <Image
                                        src={image}
                                        alt={article.imageName ?? ''}
                                        width={500}
                                        height={300}
                                        style={{ objectFit: 'contain' }}
                                    />
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
                                    <a key={index} href={`/category/${link.title}` ?? '#'}>{link.title}</a>
                                ))}
                            </span>
                        </div>
                        <h1 className="entry-title"><a href={`/articles/${article.articleId}`}>{article.name}</a></h1>
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