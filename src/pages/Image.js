import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

export default function Image({ title, data }) {
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 12;

  const [show, setShow] = useState(false);
  const [imga, setImg] = useState('');


  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
      );
      document.getElementsByClassName('paginationBttns').style = "top: 0" 
  }, [page]);

  const handleClickImage = (img) => {
    setImg(img);
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      {show && <div className='fixed top-0 right-0 z-20 w-full h-full bg-black'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleClose} className="absolute w-6 h-6 text-white cursor-pointer right-3 top-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
        <div className='flex items-center justify-center w-full h-full'>

          <img src={imga} alt='img' className='' />
        </div>
      </div>}
      <div className='lg:w-[1024px] max-sm:mt-20 mb-3 m-auto pt-5 pb-5'>
      <p
          href="https://www.tiktok.com/@camal_channel?lang=en"
          className="px-2 text-xl font-semibold"
        >
          {title}
        </p>
        <div className="grid w-full h-full gap-5 px-2 m-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
          {filterData && filterData.map(item => {
            return (
                        <img key={item.id} className="m-auto rounded-lg cursor-pointer hover:scale-105" src={item.url} alt={item.title} onClick={() => handleClickImage(item.url)}/>
            )
          })}
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
        activeClassName={"paginationActive"} />
    </div></>
)}