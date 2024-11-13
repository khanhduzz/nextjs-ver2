import React from 'react'

import video from '@/common/images/thumbs/ottawa-bokeh.jpg'
import Link from 'next/link'

const FormatVideoArticle = () => {
    return (
        <>
            <article className="brick entry format-video animate-this">
                <div className="entry-thumb video-image">
                    <Link href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                        <img src={video.src} alt="bokeh" />
                    </Link>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                <a href="#">Design</a>
                                <a href="#">Branding</a>
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-video.html">This Is a Video Post Format.</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                    </div>
                </div>
            </article>
        </>
    )
}

export default FormatVideoArticle