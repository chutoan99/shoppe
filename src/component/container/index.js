import './xxx.css';
import { useState } from 'react';
import Category from '../category/category';
import CarouselPc from '../carousel/Pc';
import Pagination from '../pagination/index';
import DiscountPc from '../discount/discount_pc/index';
import DiscountMobile from '../discount/discount_mobile/index';
import CarouselMobile from '../carousel/mobile';
import MobileCategory from './mobile_Category/index';
import HomeFilter from '../home_Filter';
import HomeProduct from './home_Product';
function Container() {
  const [perPage, setPerPage] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
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
  return (
    <div className="App__Container marginT">
      <div className="grid wide">
        <div className="row sm-gutter pt-5">
          <CarouselPc />
          <CarouselMobile />
          <DiscountPc></DiscountPc>
          <DiscountMobile></DiscountMobile>
          <Category />
          <div className="col l-12 m-12 c-12">
            <HomeFilter></HomeFilter>
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
