import './pagination.css';
import ReactPaginate from 'react-paginate';
interface Pagination {
  totalPages: number;
  setCurrentPage: any;
}

function Pagination({ totalPages, setCurrentPage }: Pagination) {
  const handleClickPage = (e: any) => {
    setCurrentPage(e.selected + 1);
  };
  return (
    <ReactPaginate
      previousLabel={'<<'}
      previousClassName={'text-[#939393]'}
      pageCount={totalPages}
      breakLabel={'...'}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={(e) => {
        handleClickPage(e);
      }}
      containerClassName={'Pagination Home-product-pagination items-center'}
      pageClassName={'Pagination-item'}
      pageLinkClassName={'Pagination-item_link'}
      activeClassName={'Pagination-item_link-active'}
      nextClassName={'text-[#939393]'}
      nextLabel={'>>'}
    />
  );
}
export default Pagination;
