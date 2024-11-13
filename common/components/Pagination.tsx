import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Number(totalPages) && page !== currentPage) {
      onPageChange(page)
    }
  }
  
  return (
    <div className="row">
      <nav className="pagination">
        <span
          className={`page-numbers prev ${currentPage === 1 ? 'inactive' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </span>
        {pages.map(page => (
          <span
            key={page}
            className={`page-numbers ${page === currentPage ? 'current' : ''}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        <span
          className={`page-numbers next ${currentPage === totalPages ? 'inactive' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </span>
      </nav>
    </div>
  )
}

export default Pagination
