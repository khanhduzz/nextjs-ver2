
import imagesStandard1 from '@/common/images/thumbs/diagonal-building.jpg'
import imagesStandard2 from '@/common/images/thumbs/ferris-wheel.jpg'
import Link from 'next/link'

const StandardArticle = () => {
    return (
        <>
            <article className="brick entry format-standard animate-this">
                <div className="entry-thumb">
                    <Link href="standard/1" className="thumb-link">
                        <img src={imagesStandard1.src} alt="building" />
                    </Link>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                <a href="#">Design</a>
                                <a href="#">Photography</a>
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-standard.html">Just a Standard Format Post.</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                    </div>
                </div>
            </article>
            <article className="brick entry format-standard animate-this">
                <div className="entry-thumb">
                    <Link href="standard/1" className="thumb-link">
                        <img src={imagesStandard2.src} alt="ferris wheel" />
                    </Link>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                <a href="#">Design</a>
                                <a href="#">UI</a>
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-standard.html">This Is Another Standard Format Post.</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                    </div>
                </div>
            </article>
        </>
    )
}

export default StandardArticle