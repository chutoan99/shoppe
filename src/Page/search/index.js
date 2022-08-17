import './search.css';
import { useEffect, useState } from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import { useParams } from 'react-router-dom';
import SearchCategory from '../../component/container/detailProduct/searchPage/SearchCategory';
import Container from '../../component/container';
import HomeProduct from '../../component/container/detailProduct/home/home_Product';
let SearchImg = require('../../Img/Search.png');
function Search() {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [inputSearch, setInputSearch] = useState(false);
  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `http://localhost:3000/data/search?search=${params.search}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setItems(response.data);
        }
        if (response.data.length === 0) {
          setInputSearch(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <div className="App">
        <div className="App__Container">
          <div className="grid wide">
            {inputSearch ? (
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
            ) : null}
            <div className="row sm-gutter">
              <div className="col l-2 col-sm-3 c-3 Hide-on-mobile">
                <SearchCategory />
              </div>
              <div className="col l-10">
                {renderHeaderSortBars()}
                <div className="Home-product">
                  <div className="row sm-gutter">
                    {items.map((element, index) => (
                      <div className="col l-3 mo-4 c-6" key={index}>
                        <div className="Home-product-item">
                          <img
                            src={`${'https://cf.shopee.vn/file/'}${element.image}`}
                            alt="itemProduct"
                            className="Home-product-item_img"
                            //   onClick={}
                          />
                          <h4 className="Home-product-item-name">{element.name}</h4>
                          <div className="Home-product-item_price">
                            <span className="Home-product-item_price-old">
                              {element.price_before_discount === 0
                                ? null
                                : `${(element.price_before_discount / 100000).toLocaleString(
                                    'it-IT'
                                  )}${'đ'}`}
                            </span>
                            <span className="Home-product-item_price-current">
                              {(element.price / 100000).toLocaleString('it-IT')}đ
                            </span>
                          </div>
                          <div className="Home-product-item_actiton">
                            ?/////
                            <span className="Home-product-item-sold">
                              {element.historical_sold}đã bán
                            </span>
                          </div>
                          <div className="Home-product-item_origin">
                            <span className="Home-product-item_brand">{element.item_brand}</span>
                            <span className="Home-product-item_orgin-name">
                              {element.item_orgin_name}
                            </span>
                          </div>
                          <div className="Home-product-item_favourite">
                            <i className="fa-solid fa-check"></i>
                            <span>Yêu thích</span>
                          </div>
                          <div className="Home-product-item_sale-off">
                            <span className="Home-product-item_sale-off-percent">
                              {element.discount}
                            </span>
                            <br></br>s<span className="Home-product-item_sale-off-label">Giảm</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
