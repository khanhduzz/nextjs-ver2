import { useRouter } from "next/router";
import SearchForm from "./SearchForm";
import { GetServerSideProps } from "next";

type Props = {
    children: React.ReactNode;
};

interface HomeProps {
    search: string;
    page: number;
    baseUrl: string;
}

export const getServerSideProps: GetServerSideProps<{ searchData: HomeProps }> = async (context) => {
    const page = Number(context.query.page) || 1;
    const search = context.query.search || "";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const data: HomeProps = {
        search: Array.isArray(search) ? search[0] : search,
        page: page,
        baseUrl: baseUrl,
    };

    return { props: { searchData: data } };
};

const Header = ({ children }: Props, searchData: HomeProps) => {
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
                            <li className={`has-children ${pathname.startsWith('/blog') ? 'current' : ''}`}>
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
                        <SearchForm searchData={searchData} />
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