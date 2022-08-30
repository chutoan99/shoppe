import Footer from '../../component/footer';
import Header from '../../component/header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchCategory from '../../component/search_filter/index';
import HomeProduct from '../../component/container/home_Product';
function Categories() {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [perPage, setPerPage] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `http://localhost:3000/data/category/${params.categories_name}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <>
      <Header></Header>
      <div className="App">
        <div className="App__Container py-[24px]">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                <SearchCategory />
              </div>
              <div className="col l-10">
                <div className="padding-search mob:pt-[50px] mob:hidden block"></div>
                {renderHeaderSortBars()}
                <HomeProduct
                  items={items}
                  start={start}
                  end={end}
                  col={'col l-2-4 mo-4 c-6'}
                ></HomeProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
  function renderHeaderSortBars() {
    return (
      <ul className="Header_sort-bars mb-3">
        <li className="Header_sort-item">
          <a href="# " className="Header_sort-link">
            Liên quan
          </a>
        </li>
        <li className="Header_sort-item Header_sort-item-active">
          <a href="# " className="Header_sort-link ">
            Mới nhất
          </a>
        </li>
        <li className="Header_sort-item">
          <a href="# " className="Header_sort-link">
            Bán chạy
          </a>
        </li>
        <li className="Header_sort-item">
          <a href="# " className="Header_sort-link">
            Giá
          </a>
        </li>
      </ul>
    );
  }
}
export default Categories;
