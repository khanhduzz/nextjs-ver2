import PrimaryContent from '@/common/components/PrimaryContent'
import { MainArticle } from '../components/ArticlesModule'

const SingleVideoArticle = (article: MainArticle) => {
    return (
        <>
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        <article className="format-video">
                            <div className="content-media">
                                <div className="fluid-video-wrapper">
                                    <iframe src={article.mediaUrl} width="640" height="360" allowFullScreen={true}></iframe>
                                </div>
                            </div>
                            <PrimaryContent />
                        </article>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SingleVideoArticle