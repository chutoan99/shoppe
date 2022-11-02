import { useState } from 'react';
import ICON from '../../assets/icont';
import IMG from '../../assets/img';
import './payment_Methods.css';
function PaymentMethods() {
  const [banners, setBanners] = useState(false);
  const [variation, setVariation] = useState(undefined);
  const handelChangeVariation = (item, index) => {
    setVariation(item);
    if (index === 0) {
      setBanners(true);
    } else {
      setBanners(false);
    }
  };
  return (
    <>
      <div className="checkout-payment-method-view__current checkout-payment-setting">
        <div className="checkout-payment-method-view__current-title">Phương thức thanh toán</div>
        <div className="checkout-payment-setting__payment-methods-tab">
          {[
            'Ví ShopeePay',
            'Thẻ Tín dụng/Ghi nợ',
            'Số dư TK Shopee(₫0)',
            'Thanh toán khi nhận hàng',
          ].map((item, index) => (
            <button
              className={`product-variation ${
                variation === item ? 'product-variation--selected' : ''
              }`}
              onClick={() => {
                handelChangeVariation(item, index);
              }}
              key={index}
            >
              {item}
              {variation === item ? (
                <div className="product-variation__tick">{ICON.HEART}</div>
              ) : null}
            </button>
          ))}
        </div>
      </div>
      {banners && (
        <div className="checkout-payment-setting__banners">
          <div
            className="channel-banner channel-banner__single"
            style={{ backgroundColor: 'rgb(238, 77, 45)' }}
          >
            <div className="channel-banner__icon">
              <img src={IMG.SALES_XU} alt="" />
            </div>
            <div className="channel-banner__logo">
              <img src={IMG.PAY} alt="" />
            </div>
            <div className="channel-banner__main-desc">
              <div>Giảm đến 90K</div>
            </div>
            <div className="channel-banner__sub-desc">Ưu đãi Ví ShopeePay</div>
          </div>
          <div>
            <div
              className="bank-transfer-category mt-[20px]"
              style={{ borderTop: '0.0625rem dashed rgba(0, 0, 0, 0.09)' }}
            >
              <div className="bank-transfer-category__body">
                <div className="checkout-bank-transfer-item checkout-bank-transfer-item--disabled">
                  <div
                    className="stardust-radio"
                    tabindex="0"
                    role="radio"
                    aria-checked="false"
                    aria-disabled="false"
                  >
                    <div className="stardust-radio-button">
                      <div className="stardust-radio-button__outer-circle">
                        <div className="stardust-radio-button__inner-circle"></div>
                      </div>
                    </div>
                    <div className="stardust-radio__content">
                      <div className="stardust-radio__label">
                        <div className="checkout-bank-transfer-item__card">
                          <div className="checkout-bank-transfer-item__icon-container">
                            <img
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/37110bc844b571f80e7dd14beb5415e9.png"
                              className="checkout-bank-transfer-item__icon"
                              alt=""
                            />
                          </div>
                          <div className="checkout-bank-transfer-item__main">
                            <div className="checkout-bank-transfer-item__title">
                              Ví ShopeePay Số dư
                            </div>
                            <div className="checkout-bank-transfer-item__subtitle">₫0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bank-transfer-category">
              <div className="bank-transfer-category__body">
                <div className="checkout-bank-transfer-item">
                  <div
                    className="stardust-radio stardust-radio--checked"
                    tabindex="0"
                    role="radio"
                    aria-checked="true"
                  >
                    <div className="stardust-radio-button stardust-radio-button--checked">
                      <div className="stardust-radio-button__outer-circle">
                        <div className="stardust-radio-button__inner-circle"></div>
                      </div>
                    </div>
                    <div className="stardust-radio__content">
                      <div className="stardust-radio__label">
                        <div className="checkout-bank-transfer-item__card">
                          <div className="checkout-bank-transfer-item__icon-container">
                            <img
                              src="https://static.v2.airpay.vn/admin/channelIcon/images_v101/c134/icon_c13403_t1610003677268.png"
                              className="checkout-bank-transfer-item__icon"
                              alt=""
                            />
                          </div>
                          <div className="checkout-bank-transfer-item__main">
                            <div className="checkout-bank-transfer-item__title">VietinBank</div>
                            <div className="checkout-bank-transfer-item__subtitle checkout-bank-account-item__number">
                              *7553
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default PaymentMethods;
