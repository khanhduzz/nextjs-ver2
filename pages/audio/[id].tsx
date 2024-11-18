import ArticleComment from '@/common/components/ArticleComment'
import PageNav from '@/common/components/PageNav'
import PrimaryContent from '@/common/components/PrimaryContent'

import image from '@/common/images/thumbs/single/single-02.jpg'

const AudioPost = () => {
    return (
        <>
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        <article className="format-standard">
                            <div className="content-media">
                                <div className="post-thumb">
                                    <img src={image.src} />
                                </div>
                                <audio id="player2" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls={true}></audio>
                            </div>
                            <PrimaryContent />
                        </article>
                    </div>
                    <PageNav />
                </div>
                <ArticleComment />
            </section >
        </>
    )
}

export default AudioPost