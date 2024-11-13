import React from 'react'

import slide1 from '@/common/images/thumbs/featured/featured-1.jpg';
import slide2 from '@/common/images/thumbs/featured/featured-2.jpg';
import slide3 from '@/common/images/thumbs/featured/featured-3.jpg';

const Slides = () => {
    return (
        <>
            <div className="brick entry featured-grid animate-this">
                <div className="entry-content">
                    <div id="featured-post-slider" className="flexslider">
                        <ul className="slides">
                            <li>
                                <div className="featured-post-slide">
                                    <div className="post-background" style={{ backgroundImage: `url(${slide1.src})` }}></div>
                                    <div className="overlay"></div>
                                    <div className="post-content">
                                        <ul className="entry-meta">
                                            <li>September 06, 2016</li>
                                            <li><a href="#" >Naruto Uzumaki</a></li>
                                        </ul>
                                        <h1 className="slide-title"><a href="single-standard.html" title="">Minimalism Never Goes Out of Style</a></h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="featured-post-slide">
                                    <div className="post-background" style={{ backgroundImage: `url(${slide2.src})` }}></div>
                                    <div className="overlay"></div>
                                    <div className="post-content">
                                        <ul className="entry-meta">
                                            <li>August 29, 2016</li>
                                            <li><a href="#">Sasuke Uchiha</a></li>
                                        </ul>
                                        <h1 className="slide-title"><a href="single-standard.html" title="">Enhancing Your Designs with Negative Space</a></h1>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="featured-post-slide">
                                    <div className="post-background" style={{ backgroundImage: `url(${slide3.src})` }}></div>
                                    <div className="overlay"></div>
                                    <div className="post-content">
                                        <ul className="entry-meta">
                                            <li>August 27, 2016</li>
                                            <li><a href="#" className="author">Naruto Uzumaki</a></li>
                                        </ul>
                                        <h1 className="slide-title"><a href="single-standard.html" title="">Music Album Cover Designs for Inspiration</a></h1>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slides