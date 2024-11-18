import { MainArticle } from '@/modules/articles/ArticlesModule';
import Image from 'next/image';

const Article = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry animate-this">
                <div className="entry-thumb">
                    <a href={`/articles/${article.articleId?? 1}`} className="thumb-link">
                        {article.imageUrl?.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={article.imageName ?? ''}
                                width={500} 
                                height={300} 
                                style={{ objectFit: 'contain' }}
                            />
                        ))}
                    </a>
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

export default Article