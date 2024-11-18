import ArticleComment from '@/common/components/ArticleComment'
import PageNav from '@/common/components/PageNav'
import PrimaryContent from '@/common/components/PrimaryContent'

import image1 from '@/common/images/thumbs/single/gallery/single-gallery-01.jpg'
import image2 from '@/common/images/thumbs/single/gallery/single-gallery-02.jpg'
import image3 from '@/common/images/thumbs/single/gallery/single-gallery-03.jpg'

const GalleryPost = () => {
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
                    <PageNav />
                </div>
                <ArticleComment />
            </section >
        </>
    )
}

export default GalleryPost