import PrimaryContent from "@/common/components/PrimaryContent"
import { MainArticle } from "../components/ArticlesModule"

import image1 from '@/common/images/thumbs/single/single-01.jpg'

const SingleStandardArticle = (article: MainArticle) => {
    return (
        <>
            <article className="format-standard">
                <div className="content-media">
                    <div className="post-thumb">
                        {article.imageUrl?.map((image, index) => (
                            <img src={image1.src} />
                        ))}
                    </div>
                </div>
                <PrimaryContent />
            </article>
        </>
    )
}

export default SingleStandardArticle