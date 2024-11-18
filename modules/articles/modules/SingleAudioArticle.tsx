import PrimaryContent from '@/common/components/PrimaryContent'
import { MainArticle } from '../components/ArticlesModule'

const SingleAudioArticle = (article: MainArticle) => {
    return (
        <>
            <article className="format-audio">
                <div className="content-media">
                    <div className="post-thumb">
                        {article.backgroundImage?.map((image, index) => (
                            <img src={image} />
                        ))}
                    </div>
                    <div className="audio-wrap">
                        <audio
                            id="player2"
                            src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3"
                            controls
                            style={{ width: '100%' }}
                        ></audio>
                    </div>
                </div>
                <PrimaryContent {...article}/>
            </article>
        </>
    )
}

export default SingleAudioArticle