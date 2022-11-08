import ICON from '../../assets/icons';

interface TotalPay {
  handleBuyCart: any;
  data: any;
  checked: any;
  total: any;
}

function TotalPay({ handleBuyCart, data, checked, total }: TotalPay) {
  return (
    <div className="App__Container fixed ">
      <div className="grid wide">
        <div className="pay">
          <div className="pay1 ">
            <div className="grid">
              <div className="cart-Shopee-Voucher">
                {ICON.TAGS}
                <h1>Shopee Voucher</h1>
                <h2>Chọn Hoặc Nhập Mã</h2>
              </div>
            </div>
          </div>
          <div className="pay2">
            <div className="grid">
              <div className="cart-Shopee-coin">
                {ICON.COIN}
                <h1>Shopee Xu</h1>
                <h2> Bạn chưa chọn sản phẩm</h2>
                {ICON.CIRCLE_QUESTION}
              </div>
            </div>
          </div>
          <div className="pay3">
            <div className="grid pay-container">
              <div className="select-all">
                <label className="shopping_cart-checkBox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <h1 className="Hide-on-mobile">Chọn</h1>
                <h1>Tất Cả</h1>
                <h1 className="Hide-on-mobile">({data?.length})</h1>
              </div>
              <div className="shopping_cart-delete-total">
                <span>Xóa</span>
                <h2>Bỏ sản Phẩm Không Hoạt Động</h2>
              </div>
              <div className="shopping_cart-save">
                <h1>Lưu Vào Thư Mục Đã Thích</h1>
              </div>
              <div className="shopping_cart-total-pay">
                <h1>Tổng Thanh Toán</h1>
                <h1 className="Hide-on-mobile"> ({checked?.length} Sản Phẩm):</h1>
                <span>
                  <sup>đ</sup>
                  {(total / 100000).toLocaleString('it-IT')}
                </span>
              </div>
              <button className="cart-btn-pay" onClick={handleBuyCart}>
                Mua Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TotalPay;
