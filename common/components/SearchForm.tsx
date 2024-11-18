const SearchForm = () => {
    return (
        <>
            <form role="search" method="get" className="search-form" action="#">
                <label>
                    <span className="hide-content">Search for:</span>
                    <input type="search" className="search-field" placeholder="Type Your Keywords" defaultValue="" name="s" title="Search for:" />
                </label>
                <input type="submit" className="search-submit" defaultValue="Search" />
            </form>
            <a href="" id="close-search" className="close-btn">Close</a>
        </>
    )
}

export default SearchForm