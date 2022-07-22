import Category from './Category';
import HomeFilter from './Home-Filter';
import MobileCategory from './Mobile_Category';
import Pagination from './Pagination';
import HomeProduct from './Home_Product';
import Carousel from './Carousel';
import Discount from './Discount';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import datas from '../redux/data';
function Container() {
  const [perPage, setPerPage] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  // let totalPages = (datas.items.length / perPage).toFixed(0);
  let totalPages = 4;
  const handleNextPages = () => {
    setStart(currentPage - 1 + perPage);
    setEnd((currentPage + 1) * perPage);
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPages = () => {
    if (currentPage < 1) {
      setCurrentPage(1);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(
    'totalPages',
    totalPages,
    'start',
    start,
    'end',
    end,
    'currentPage',
    currentPage,
    'perPage',
    perPage
  );

  const handleClick = (item, index) => {
    const itemInfor = {
      item: item,
      index: index,
    };
    const items = localStorage.setItem('inforItem', JSON.stringify(itemInfor));
    return items;
  };
  const itemId = JSON.parse(localStorage.getItem('inforItem'));
  return (
    <div className="App__Container marginT">
      <div className="grid wide">
        <div className="row sm-gutter app-content">
          <Carousel />
          <Discount />
          <Category />
          <div className="col l-12 m-12 c-12">
            <HomeFilter />
            <MobileCategory />
            <HomeProduct handleClick={handleClick} start={start} end={end} />
            <Pagination
              handleNextPages={handleNextPages}
              handlePrevPages={handlePrevPages}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
