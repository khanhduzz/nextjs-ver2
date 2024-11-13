import React from 'react'

import imageGallery1 from '@/common/images/thumbs/gallery/work1.jpg'
import imageGallery2 from '@/common/images/thumbs/gallery/work2.jpg'
import imageGallery3 from '@/common/images/thumbs/gallery/work3.jpg'

const GalleryArticle = () => {
    return (
        <>
            <article className="brick entry format-gallery group animate-this">
                <div className="entry-thumb">
                    <div className="post-slider flexslider">
                        <ul className="slides">
                            <li>
                                <img src={imageGallery1.src} />
                            </li>
                            <li>
                                <img src={imageGallery2.src} />
                            </li>
                            <li>
                                <img src={imageGallery3.src} />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                <a href="#">Branding</a>
                                <a href="#">Wordpress</a>
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-gallery.html">Workspace Design Trends and Ideas.</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                    </div>
                </div>
            </article>
        </>
    )
}

export default GalleryArticle