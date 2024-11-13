import PageNav from "@/common/components/PageNav"
import PrimaryContent from "@/common/components/PrimaryContent"
import { useRouter } from "next/router"

import image from '@/common/images/thumbs/single/single-01.jpg'
import CommentPost from "@/common/components/CommentPost"

const StandardPost = () => {
    const router = useRouter()
    const { id } = router.query

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
                            </div>
                            <PrimaryContent />
                        </article>
                    </div>
                    <PageNav />
                </div>
                <CommentPost />
            </section >
        </>
    )
}

export default StandardPost