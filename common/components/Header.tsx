import { useRouter } from "next/router";
import SearchForm from "./SearchForm";

type Props = {
    children: React.ReactNode;
};

const Header = ({ children }: Props) => {
    const router = useRouter();
    const { pathname } = router;

    const isCurrent = (path: string) => pathname === path;
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
                            <li className={isCurrent('/') ? 'current' : ''}><a href="/" title="">Home</a></li>
                            <li className={`has-children ${pathname.startsWith('/category') ? 'current' : ''}`}>
                                <a href="/category" title="">Categories</a>
                                <ul className="sub-menu">
                                    <li><a href="/category/wordpress">Wordpress</a></li>
                                    <li><a href="/category/html">HTML</a></li>
                                    <li><a href="/category/photography">Photography</a></li>
                                    <li><a href="/category/ui">UI</a></li>
                                    <li><a href="/category/mockups">Mockups</a></li>
                                    <li><a href="/category/branding">Branding</a></li>
                                </ul>
                            </li>
                            <li className={`has-children ${pathname.startsWith('/standard') || pathname.startsWith('/video') || pathname.startsWith('/audio') || pathname.startsWith('/gallery') ? 'current' : ''}`}>
                                <a href="/blog" title="">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="/blog/video">Video Post</a></li>
                                    <li><a href="/blog/audio">Audio Post</a></li>
                                    <li><a href="/blog/gallery">Gallery Post</a></li>
                                    <li><a href="/blog/standard">Standard Post</a></li>
                                </ul>
                            </li>
                            <li className={isCurrent('/style') ? 'current' : ''}><a href="/style" title="">Styles</a></li>
                            <li className={isCurrent('/about') ? 'current' : ''}><a href="/about" title="">About</a></li>
                            {children}
                        </ul>
                    </nav>
                    <div className="search-wrap">
                        <SearchForm />
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