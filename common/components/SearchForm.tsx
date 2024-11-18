import { GetServerSideProps } from "next";
import { useState } from "react";

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

const SearchForm = ({ searchData }: { searchData: HomeProps }) => {
    const [searchTerm, setSearchTerm] = useState(searchData ? searchData.search : '');
    const [searchURL, setSearchUrl] = useState(searchData ? searchData.baseUrl : 'http://localhost:3000');
    const [searchPage, setSearchPage] = useState(searchData ? searchData.page : 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const searchUrl = `${searchURL}/?page=${searchPage}&search=${encodeURIComponent(searchTerm)}`;
            window.location.href = searchUrl;
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <>
            <form role="search" method="get" className="search-form" onSubmit={handleSubmit}>
                <label>
                    <span className="hide-content">Search for:</span>
                    <input
                        type="search"
                        className="search-field"
                        placeholder="Type Your Keywords"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        name="s"
                        title="Search for:"
                    />
                </label>
                <input type="submit" className="search-submit" value="Search" />
            </form>
        </>
    );
};

export default SearchForm;
