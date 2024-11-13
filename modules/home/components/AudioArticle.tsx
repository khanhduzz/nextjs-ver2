import React from 'react'

import audioImage1 from '@/common/images/thumbs/concert.jpg';
import Link from 'next/link';

const AudioArticle = () => {
    return (
        <>
            <article className="brick entry format-audio animate-this">
                <div className="entry-thumb">
                    <Link href="audio/1" className="thumb-link">
                        <img src={audioImage1.src} alt="concert" />
                    </Link>
                    <div className="audio-wrap">
                        <audio id="player" src="/media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls></audio>
                    </div>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                <a href="#">Design</a>
                                <a href="#">Music</a>
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-audio.html">This Is a Audio Format Post.</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                    </div>
                </div>
            </article>
        </>
    )
}

export default AudioArticle