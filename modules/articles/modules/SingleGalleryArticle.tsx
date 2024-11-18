import PrimaryContent from '@/common/components/PrimaryContent'
import { MainArticle } from '../components/ArticlesModule'

import image1 from '@/common/images/thumbs/single/gallery/single-gallery-01.jpg'
import image2 from '@/common/images/thumbs/single/gallery/single-gallery-02.jpg'
import image3 from '@/common/images/thumbs/single/gallery/single-gallery-03.jpg'

const SingleGalleryArticle = (article: MainArticle) => {
    return (
        <>
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        <article className="format-gallery">
                            <div className="content-media">
                                <div className="post-slider flexslider">
                                    <ul className="slides">
                                        <li>
                                            <img src={image1.src} />
                                        </li>
                                        <li>
                                            <img src={image2.src} />
                                        </li>
                                        <li>
                                            <img src={image3.src} />
                                        </li>
                                    </ul>
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

export default SingleGalleryArticle