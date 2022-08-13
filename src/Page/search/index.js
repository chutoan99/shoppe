import './search.css';
import { useState } from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import HomeProduct from '../../component//container/Home_Product';
import SearchCategory from '../../component/container/SearchCategory';
let SearchImg = require('../../Img/Search.png');
function Search() {
  const [perPage, setPerPage] = useState(48);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  return (
    <>
      <Header />
      <div className="App">
        <div className="App__Container">
          <div className="grid wide">
            <div className="shopee-search-empty-result-section">
              <div className="shopee-search-empty-result-section-img">
                <img src={SearchImg} alt="Search" />
              </div>
              <h2 className="shopee-search-empty-title">Không tìm thấy kết quả nào</h2>
              <h3 className="shopee-search-empty-title-hint">
                Hãy thử sử dụng các từ khóa chung chung hơn thấy kết quả nào
              </h3>
              <h3 className="shopee-search-empty-suggestions">bạn cũng có thể thích</h3>
            </div>

            <div className="row sm-gutter">
              <div className="col l-2 col-sm-3 c-3">
                <SearchCategory />
              </div>
              <div className="col l-10">
                {renderHeaderSortBars()}
                <HomeProduct start={start} end={end} />
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
      <ul className="Header_sort-bars">
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
export default Search;
