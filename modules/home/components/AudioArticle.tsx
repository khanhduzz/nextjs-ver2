import { MainArticle } from '@/modules/posts/PostPagination';
import Link from 'next/link';
import Image from 'next/image';

const AudioArticle = (article: MainArticle) => {
    return (
        <>
            <article className="brick entry format-audio animate-this">
                <div className="entry-thumb">
                    <a href={`/audio/${article.articleId}`} className="thumb-link">
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
                    <div className="audio-wrap">
                        <audio id="player" src={article.mediaUrl} controls></audio>
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
                        <h1 className="entry-title"><a href="single-audio.html">{article.name}</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        {article.description}
                    </div>
                </div>
            </article>
        </>
    )
}

export default AudioArticle