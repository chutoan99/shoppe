function ShopName(props) {
  const { item } = props;
  return (
    <div className="App__Container App__Container_padding-Button">
      <div className="grid wide">
        <div className="row sm-gutter app-content back center">
          <div className="col-12  l-5 dis">
            <div className="col-3  l-4 mo-2">
              <div className="product_band">
                <img src="https://cf.shopee.vn/file/47a0665f49b23e820b1d9e91b6f608e4" alt="" />
              </div>
              <div className="product_band-title">
                <span>Yêu Thích</span>
              </div>
            </div>
            <div className="col-9  l-8 m-10">
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
            </div>
          </div>
          <div className="col s-7 c-12  l-7">
            <div className="product_rating">
              <div className="product_rating-content col s-3 c-3  l-3">
                <label>
                  <span>Đánh Giá</span>
                  <span>245</span>
                </label>
              </div>
              <div className="product_rating-content col s-5 c-5  l-5">
                <label>
                  <span>tỷ Lệ Phản Hồi</span>
                  <span>99%</span>
                </label>
              </div>
              <div className="product_rating-content col s-4 c-4  l-4">
                <label>
                  <span>Tham Gia</span>
                  <span>5 năm trước</span>
                </label>
              </div>
            </div>
            <div className="product_rating">
              <div className="product_rating-content col s-3 c-3  l-3">
                <label>
                  <span>Sản Phẩm</span>
                  <span>16</span>
                </label>
              </div>
              <div className="product_rating-content col s-5 c-5  l-5">
                <label>
                  <span>Thời Gian Phản Hồi</span>
                  <span>trong vài phút</span>
                </label>
              </div>
              <div className="product_rating-content col s-4 c-4  l-4">
                <label>
                  <span>Người Theo Dõi</span>
                  <span>5,7k</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShopName;
