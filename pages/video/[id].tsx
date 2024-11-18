import ArticleComment from '@/common/components/ArticleComment'
import PageNav from '@/common/components/PageNav'
import PrimaryContent from '@/common/components/PrimaryContent'
import React from 'react'

const VideoPost = () => {
    return (
        <>
            <section id="content-wrap" className="blog-single">
                <div className="row">
                    <div className="col-twelve">
                        <article className="format-video">
                            <div className="content-media">
                                <div className="fluid-video-wrapper">
                                    <iframe src="https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0" width="640" height="360" allowFullScreen={true}></iframe>
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

export default VideoPost