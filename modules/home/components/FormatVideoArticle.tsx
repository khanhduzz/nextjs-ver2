import Link from 'next/link'
import { MainArticle } from '@/modules/posts/PostPagination'
import Image from 'next/image'

const FormatVideoArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-video animate-this">
                <div className="entry-thumb video-image">
                    <Link href={article.mediaUrl ?? ''} data-lity>
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
                                    <Link key={index} href={link.link ?? '#'}>{link.title}</Link>
                                ))}
                            </span>
                        </div>
                        <h1 className="entry-title"><Link href={`/video/${article.articleId}`}>{article.name}</Link></h1>
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