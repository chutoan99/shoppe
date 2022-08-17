import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function ProductShop() {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const params = useParams();
  useEffect(() => {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: `http://localhost:3000/data/item/${params.idItem}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setItem(response.data[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.idItem]);
  return (
    <div className="App__Container py-3">
      <div className="grid wide">
        <div className="sm-gutter shop-content back center">
          <div onClick={() => navigate(`/shop/${item.shopid}`)}>
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
              <h2>{item.shop_name}</h2>
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
  );
}
export default ProductShop;
