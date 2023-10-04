import React, { useEffect, useState } from 'react';

export const Pagination = ({ totalPosts, postsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const windowWidth = window.innerWidth;
 const smallSizeThreshold = 768;
 const mediumSizeThreshold = 1024;
 let pageLimit;

 if (windowWidth < smallSizeThreshold) {
     pageLimit = 4;
  } else if (windowWidth < mediumSizeThreshold) {
     pageLimit = 10;
  } else {
    pageLimit = 15;
  }

  
  const [displayPages, setDisplayPages] = useState([]);

  const calculateDisplayPages = () => {
    const halfPageLimit = Math.floor(pageLimit / 2);
    let startPage, endPage;

    if (totalPages <= pageLimit) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= halfPageLimit) {
        startPage = 1;
        endPage = pageLimit;
      } else if (currentPage >= totalPages - halfPageLimit) {
        startPage = totalPages - pageLimit + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfPageLimit;
        endPage = currentPage + halfPageLimit;
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setDisplayPages(pages);
  };

  useEffect(() => {
    calculateDisplayPages();
  }, [currentPage, totalPages]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination-button btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
       <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z" fill="#969696" />
		</svg>
      </button>
      
      {currentPage > 3 && (
        <button
          className="pagination-button btn "
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      )}

      {currentPage > 4 && (
        <span className="pagination-ellipsis">...</span>
      )}

      {displayPages.map((page) => (
        <button
          key={page}
          className={`pagination-button btn ${currentPage === page ? 'btn-active ' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages - 3 && (
        <span className="pagination-ellipsis text-[white]">...</span>
      )}

      {currentPage < totalPages - 2 && (
        <button
          className="pagination-button btn"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className={`pagination-button btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z" fill="#969696" />
		</svg>
      </button>
    </div>
  );
};
