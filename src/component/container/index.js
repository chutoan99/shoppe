import { useState } from 'react';
import Discount from './Discount';
import datas from '../../redux/data';
import HomeFilter from './Home-Filter';
import Category from './category/index';
import Carousel from '../carousel/Pc';
import HomeProduct from './Home_Product';
import Pagination from '../pagination/index';
import MobileCategory from './mobile_Category/index';
import CarouselPc from '../carousel/Pc';
import CarouselMobile from '../carousel/mobile';
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
        <div className="row sm-gutter pt-5">
          <CarouselPc />
          <CarouselMobile />
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
