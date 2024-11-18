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
                                        {article.backgroundImage?.map((image, index) => (
                                            <li>
                                                <img src={image} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <PrimaryContent {...article}/>
                        </article>
                    </div>
                </div>
            </section >
        </>
    )
}

export default SingleGalleryArticle