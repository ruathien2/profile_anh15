import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function CardProject({ data }) {
  // const [pageNumber, setPageNumber] = useState(0);
  // const dataPerPage = 3;
  // const pagesVisited = pageNumber * dataPerPage;
  // const pageCount = Math.ceil(data.length / dataPerPage);
  //   const changePage = ({ selected }) => {
  //   console.log(selected);
  //   setPageNumber(selected);
  // };


  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 3;

  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filterData && filterData.map(item => (
          <a
          target="_blank"
          href={item.url}
          className="w-full rounded-lg shadow-lg hover:scale-105 hover:opacity-85"
        >
          <img
            className="w-full h-[200px] bg-red-200 shadow-lg rounded-t-lg object-cover"
            src={item.image}
            alt="house-cat"
          />
          <div className="flex flex-col p-2 ">
              <span>Name: {item.title}</span>
              <span>Design: {item.author}</span>
              <span>Date: {item.date}</span>
          </div>
        </a>
        ))}
      </div>
      <ReactPaginate
          previousLabel={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
}
          nextLabel={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
}
           pageCount={Math.ceil(data.length / n)}
          onPageChange={(event) => setPage(event.selected)}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
    </div>
  );
}
