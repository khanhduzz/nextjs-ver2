import { MainArticle } from '@/modules/posts/PostPagination';
import Link from 'next/link';
import Image from 'next/image';

const Article = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry animate-this">
                <div className="entry-thumb">
                    <Link href="standard/1" className="thumb-link">
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
                    </Link>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                {article.articleCategories?.map((link, index) => (
                                    <Link key={index} href={`/category/?category=${link.title}` ?? '#'}>{link.title}</Link>
                                ))}
                            </span>
                        </div>
                        <h1 className="entry-title"><Link href={`/standard/${article.articleId}`}>{article.name}</Link></h1>
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