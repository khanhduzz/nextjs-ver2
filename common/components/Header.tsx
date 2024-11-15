import { useRouter } from "next/router";

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
                                    <li><a href="/category?category=wordpress">Wordpress</a></li>
                                    <li><a href="/category?category=html">HTML</a></li>
                                    <li><a href="/category?category=photography">Photography</a></li>
                                    <li><a href="/category?category=ui">UI</a></li>
                                    <li><a href="/category?category=mockups">Mockups</a></li>
                                    <li><a href="/category?category=branding">Branding</a></li>
                                </ul>
                            </li>
                            <li className={`has-children ${pathname.startsWith('/standard') || pathname.startsWith('/video') || pathname.startsWith('/audio') || pathname.startsWith('/gallery') ? 'current' : ''}`}>
                                <a href="/standard/1" title="">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="/video/1">Video Post</a></li>
                                    <li><a href="/audio/1">Audio Post</a></li>
                                    <li><a href="/gallery/1">Gallery Post</a></li>
                                    <li><a href="/standard/1">Standard Post</a></li>
                                </ul>
                            </li>
                            <li className={isCurrent('/style') ? 'current' : ''}><a href="/style" title="">Styles</a></li>
                            <li className={isCurrent('/about') ? 'current' : ''}><a href="/about" title="">About</a></li>
                            <li className={isCurrent('/contact') ? 'current' : ''}><a href="/contact" title="">Contact</a></li>
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



// import { useRouter } from 'next/router';
// import Link from 'next/link'; // Correct import of Link
// import { useEffect } from 'react';

// type Props = {
//     children: React.ReactNode;
// };

// const Header = ({ children }: Props) => {
//     const router = useRouter();
//     const isActive = (path: string) => router.pathname === path;

//     useEffect(() => {
//         const handleRouteChange = () => {
//             // Place any jQuery reinitialization logic here.
//             console.log('Route change detected, trigger your animation re-initialization here.');
//             // Example: If you have a function to restart animations
//             // initAnimations();
//         };

//         router.events.on('routeChangeComplete', handleRouteChange);
//         return () => {
//             router.events.off('routeChangeComplete', handleRouteChange);
//         };
//     }, [router.events]);
    
//     return (
//         <>
//             <header className="short-header">
//                 <div className="gradient-block"></div>
//                 <div className="row header-content">
//                     <div className="logo">
//                         <Link href="/">Author</Link>
//                     </div>
//                     <nav id="main-nav-wrap">
//                         <ul className="main-navigation sf-menu">
//                             <li className={isActive('/') ? 'current' : ''}>
//                                 <Link href="/" title="">Home</Link>
//                             </li>
//                             <li className={`has-children ${isActive('/category.html') ? 'current' : ''}`}>
//                                 <Link href="/category.html" title="">Categories</Link>
//                                 <ul className="sub-menu">
//                                     <li><Link href="/category.html">Wordpress</Link></li>
//                                     <li><Link href="/category.html">HTML</Link></li>
//                                     <li><Link href="/category.html">Photography</Link></li>
//                                     <li><Link href="/category.html">UI</Link></li>
//                                     <li><Link href="/category.html">Mockups</Link></li>
//                                     <li><Link href="/category.html">Branding</Link></li>
//                                 </ul>
//                             </li>
//                             <li className={`has-children ${isActive('/standard/1') ? 'current' : ''}`}>
//                                 <Link href="/standard/1" title="">Blog</Link>
//                                 <ul className="sub-menu">
//                                     <li><Link href="/video/1">Video Post</Link></li>
//                                     <li><Link href="/audio/1">Audio Post</Link></li>
//                                     <li><Link href="/gallery/1">Gallery Post</Link></li>
//                                     <li><Link href="/standard/1">Standard Post</Link></li>
//                                 </ul>
//                             </li>
//                             <li className={isActive('/style') ? 'current' : ''}>
//                                 <Link href="/style" title="">Styles</Link>
//                             </li>
//                             <li className={isActive('/about') ? 'current' : ''}>
//                                 <Link href="/about" title="">About</Link>
//                             </li>
//                             <li className={isActive('/contact') ? 'current' : ''}>
//                                 <Link href="/contact" title="">Contact</Link>
//                             </li>
//                             {children}
//                         </ul>
//                     </nav>
//                     <div className="search-wrap">
//                         <form role="search" method="get" className="search-form" action="#">
//                             <label>
//                                 <span className="hide-content">Search for:</span>
//                                 <input
//                                     type="search"
//                                     className="search-field"
//                                     placeholder="Type Your Keywords"
//                                     defaultValue=""
//                                     name="s"
//                                     title="Search for:"
//                                 />
//                             </label>
//                             <input type="submit" className="search-submit" defaultValue="Search" />
//                         </form>
//                         <a href="#" id="close-search" className="close-btn">Close</a>
//                     </div>

//                     <div className="triggers">
//                         <a className="search-trigger" href="#"><i className="fa fa-search"></i></a>
//                         <a className="menu-toggle" href="#"><span>Menu</span></a>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }

// export default Header;
