import { useNavigate } from 'react-router-dom';
import ICON from '../../assets/icont';
function ProductShop({ item }) {
  const navigate = useNavigate();
  return (
    <div className="App__Container py-[16px]">
      <div className="grid wide">
        <div className="sm-gutter shop-content pb-[30px] bg-[white] p-[25px]">
          <div onClick={() => navigate(`/shop/${item?.shopid}`)}>
            <div className="product_band">
              <img
                src={`${'https://cf.shopee.vn/file/'}${item?.account?.portrait}`}
                alt="product_band"
              />
            </div>
            <div className="product_band-title">
              <span>Yêu Thích</span>
            </div>
          </div>
          <div className="product_band-name">
            <div className="product_band-heading">
              <h2>{item?.name}</h2>
              <h3>Online 2 giờ trước</h3>
            </div>
            <div className="product_band-chat">
              <button>{ICON.MESS}Chat Ngay</button>
              <button>{ICON.HOUSE}Xem Shop</button>
            </div>
          </div>
          <div className="product_rating">
            <div className="product_rating-item">
              <label>
                <span>Đánh Giá</span>
                <span>{item?.rating_bad + item?.rating_good + item?.rating_normal}</span>
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
                <span>{item?.item_count}</span>
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
                <span>{item?.follower_count}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductShop;
