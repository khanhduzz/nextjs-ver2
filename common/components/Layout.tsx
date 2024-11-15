import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import AuthenticationInformation from './AuthenticationInformation';
import Preloader from './Preloader';
import BackToTop from './BackToTop';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>NextJs</title>
                <meta name="description" content="Assignment" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header>
                <AuthenticationInformation />
            </Header>
            <Preloader />
            <div className="body" id="top" >{children}</div>
            <BackToTop />
            <Footer />
        </>
    )
}

export default Layout