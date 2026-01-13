function SectionPagination({ currentPage, totalPages, onPageChange }) {

    const handleClick = (e, page) => {
        e.preventDefault();   // stop page reload
        onPageChange(page);
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination-outer">
            <div className="pagination-style1">
                <ul className="clearfix">

                    {/* Previous */}
                    <li className={currentPage === 1 ? "disabled prev" : "prev"}>
                        <a href="#" onClick={(e) => currentPage > 1 && handleClick(e, currentPage - 1)}>
                            <i className="fa fa-angle-left" />
                        </a>
                    </li>

                    {/* Page Numbers */}
                    {pages.map((num) => (
                        <li key={num} className={currentPage === num ? "active" : ""}>
                            <a href="#" onClick={(e) => handleClick(e, num)}>
                                {num}
                            </a>
                        </li>
                    ))}

                    {/* Next */}
                    <li className={currentPage === totalPages ? "disabled next" : "next"}>
                        <a href="#" onClick={(e) => currentPage < totalPages && handleClick(e, currentPage + 1)}>
                            <i className="fa fa-angle-right" />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default SectionPagination;
