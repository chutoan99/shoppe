import './xxx.css';
import { useState, useEffect } from 'react';
import Category from '../category/category';
import CarouselPc from '../carousel/Pc';
import Pagination from '../pagination/index';
import DiscountPc from '../discount/discount_pc/index';
import DiscountMobile from '../discount/discount_mobile/index';
import CarouselMobile from '../carousel/mobile';
import HomeFilter from '../home_Filter';
import HomeProduct from './home_Product';
import Best from './best';
function Container() {
  const [items, setItems] = useState([]);
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

  useEffect(() => {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'http://localhost:3000/datas',
      headers: {},
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setItems(response.data.items);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // const random = items.sort(() => Math.random() - 0.5);
  return (
    <div className="App__Container">
      <div className="grid wide">
        <CarouselMobile />
        <div className="row sm-gutter">
          <CarouselPc />
          <DiscountPc></DiscountPc>
          <DiscountMobile></DiscountMobile>
          <Category />
          <div className="col l-12 mo-12 c-12">
            <HomeFilter></HomeFilter>
            <HomeProduct start={start} end={end} items={items} col={'col l-2 mo-4 c-6'} />
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
