import { formatPrice } from '../../utils/fomarPrice';

interface OderPay {
  handelSubmit: any;
  total: any;
  totalShip: any;
}

function OderPay({ handelSubmit, total, totalShip }: OderPay) {
  return (
    <div className="order-pay">
      <div>
        <div className="order-pay-inner">
          <div></div>
          <div className="order-pay-content">
            <h3>Tổng tiền hàng</h3>
            <h3>Phí vận chuyển</h3>
            <h3>Tổng thanh toán:</h3>
          </div>
          <div className="order-pay-content">
            <h3>đ{formatPrice(total)}</h3>
            <h3>đ{formatPrice(totalShip)}</h3>
            <h1>₫{formatPrice(total, 0, totalShip)}</h1>
          </div>
        </div>
        <div className="order-pay-footer">
          <div className="order-pay-footer-des">
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
            <a href="https://shopee.vn/legaldoc/policies/">Điều khoản Shopee</a>
          </div>
          <button onClick={handelSubmit}>Đặt hàng</button>
        </div>
      </div>
    </div>
  );
}
export default OderPay;
