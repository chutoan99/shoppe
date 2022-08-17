import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
function Shop() {
  const params = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: `http://localhost:3000/data/shop/${params.id}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setItem(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <>
      <Header />
      <div className="" style={{ paddingTop: '120px' }}>
        <div className="grid wide">
          <div className="sm-gutter shop-content back" style={{ padding: '30px' }}>
            <div>
              <div className="product_band">
                <img
                  src="https://cf.shopee.vn/file/47a0665f49b23e820b1d9e91b6f608e4"
                  alt="product_band"
                />
              </div>
              <div className="product_band-title">
                <span>Yêu Thích</span>
              </div>
            </div>
            <div className="product_band-name">
              <div className="product_band-heading">
                <h2>xxxxx</h2>
                <h3>Online 2 giờ trước</h3>
              </div>
              <div className="product_band-chat">
                <button>
                  <i class="fa-solid fa-message"></i>Chat Ngay
                </button>
                <button>
                  <i class="fa-solid fa-house"></i>Xem Shop
                </button>
              </div>
            </div>
            <div className="product_rating">
              <div className="product_rating-item">
                <label>
                  <span>Đánh Giá</span>
                  <span>245</span>
                </label>
              </div>
              <div className="product_rating-item">
                <label>
                  <span>tỷ Lệ Phản Hồi</span>
                  <span>99%</span>
                </label>
              </div>
              <div className="product_rating-item">
                <label>
                  <span>Tham Gia</span>
                  <span>5 năm trước</span>
                </label>
              </div>
              <div className="product_rating-item">
                <label>
                  <span>Sản Phẩm</span>
                  <span>16</span>
                </label>
              </div>
              <div className="product_rating-item">
                <label>
                  <span>Thời Gian Phản Hồi</span>
                  <span>trong vài phút</span>
                </label>
              </div>
              <div className="product_rating-item">
                <label>
                  <span>Người Theo Dõi</span>
                  <span>5,7k</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App__Container">
        <div className="grid wide">
          <div className="row sm-gutter pt-5">
            <div className="col l-12 m-12 c-12">
              <div className="Home-product">
                <div className="row sm-gutter">
                  {item.map((element, index) => (
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
      <Footer />
    </>
  );
}
export default Shop;
