import a from "next/link"

type Props = {
    children: React.ReactNode;
};

const Header = ({ children }: Props) => {
    return (
        <>
            <header className="short-header">
                <div className="gradient-block"></div>
                <div className="row header-content">
                    <div className="logo">
                        <a href="/">Author</a>
                    </div>
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation sf-menu">
                            <li className="current"><a href="/" title="">Home</a></li>
                            <li className="has-children">
                                <a href="/category.html" title="">Categories</a>
                                <ul className="sub-menu">
                                    <li><a href="/category.html">Wordpress</a></li>
                                    <li><a href="/category.html">HTML</a></li>
                                    <li><a href="/category.html">Photography</a></li>
                                    <li><a href="/category.html">UI</a></li>
                                    <li><a href="/category.html">Mockups</a></li>
                                    <li><a href="/category.html">Branding</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="/standard/1" title="">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="/video/1">Video Post</a></li>
                                    <li><a href="/audio/1">Audio Post</a></li>
                                    <li><a href="/gallery/1">Gallery Post</a></li>
                                    <li><a href="/standard/1">Standard Post</a></li>
                                </ul>
                            </li>
                            <li><a href="/style" title="">Styles</a></li>
                            <li><a href="/about" title="">About</a></li>
                            <li><a href="/contact" title="">Contact</a></li>
                            {children}
                        </ul>
                    </nav>
                    <div className="search-wrap">
                        <form role="search" method="get" className="search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Your Keywords" defaultValue="" name="s" title="Search for:" />
                            </label>
                            <input type="submit" className="search-submit" defaultValue="Search" />
                        </form>
                        <a href="#" id="close-search" className="close-btn">Close</a>
                    </div>

                    <div className="triggers">
                        <a className="search-trigger" href="#"><i className="fa fa-search"></i></a>
                        <a className="menu-toggle" href="#"><span>Menu</span></a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header