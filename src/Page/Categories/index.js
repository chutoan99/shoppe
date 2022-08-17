import Footer from '../../component/footer';
import Header from '../../component/header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchCategory from '../../component/container/detailProduct/searchPage/SearchCategory';
function Categories() {
  const params = useParams();
  const [items, setItems] = useState([]);
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
        <div className="App__Container py-5">
          <div className="grid wide">
            <div className="row sm-gutter">
              <div className="col l-2 col-sm-3 c-3">
                <SearchCategory />
              </div>
              <div className="col l-10">
                {renderHeaderSortBars()}
                <div className="Home-product">
                  <div className="row sm-gutter">
                    {items.map((element, index) => (
                      <div className="col l-2 mo-4 c-6" key={index}>
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
export default Categories;
