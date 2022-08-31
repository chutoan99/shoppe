import { useState } from 'react';
import './payment_Methods.css';
let Sales = require('../../Img/sales.jpg');
let Pay = require('../../Img/pay.png');
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
      <div class="checkout-payment-method-view__current checkout-payment-setting">
        <div class="checkout-payment-method-view__current-title">Phương thức thanh toán</div>
        <div class="checkout-payment-setting__payment-methods-tab">
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
                <div class="product-variation__tick">
                  <i class="fa-solid fa-check"></i>
                </div>
              ) : null}
            </button>
          ))}
        </div>
      </div>
      {banners ? (
        <div class="checkout-payment-setting__banners">
          <div
            class="channel-banner channel-banner__single"
            style={{ backgroundColor: 'rgb(238, 77, 45)' }}
          >
            <div class="channel-banner__icon">
              <img src={Sales} alt="" />
            </div>
            <div class="channel-banner__logo">
              <img src={Pay} alt="" />
            </div>
            <div class="channel-banner__main-desc">
              <div>Giảm đến 90K</div>
            </div>
            <div class="channel-banner__sub-desc">Ưu đãi Ví ShopeePay</div>
          </div>
          <div>
            <div
              class="bank-transfer-category mt-[20px]"
              style={{ borderTop: '0.0625rem dashed rgba(0, 0, 0, 0.09)' }}
            >
              <div class="bank-transfer-category__body">
                <div class="checkout-bank-transfer-item checkout-bank-transfer-item--disabled">
                  <div
                    class="stardust-radio"
                    tabindex="0"
                    role="radio"
                    aria-checked="false"
                    aria-disabled="false"
                  >
                    <div class="stardust-radio-button">
                      <div class="stardust-radio-button__outer-circle">
                        <div class="stardust-radio-button__inner-circle"></div>
                      </div>
                    </div>
                    <div class="stardust-radio__content">
                      <div class="stardust-radio__label">
                        <div class="checkout-bank-transfer-item__card">
                          <div class="checkout-bank-transfer-item__icon-container">
                            <img
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/37110bc844b571f80e7dd14beb5415e9.png"
                              class="checkout-bank-transfer-item__icon"
                              alt=""
                            />
                          </div>
                          <div class="checkout-bank-transfer-item__main">
                            <div class="checkout-bank-transfer-item__title">Ví ShopeePay Số dư</div>
                            <div class="checkout-bank-transfer-item__subtitle">₫0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bank-transfer-category">
              <div class="bank-transfer-category__body">
                <div class="checkout-bank-transfer-item">
                  <div
                    class="stardust-radio stardust-radio--checked"
                    tabindex="0"
                    role="radio"
                    aria-checked="true"
                  >
                    <div class="stardust-radio-button stardust-radio-button--checked">
                      <div class="stardust-radio-button__outer-circle">
                        <div class="stardust-radio-button__inner-circle"></div>
                      </div>
                    </div>
                    <div class="stardust-radio__content">
                      <div class="stardust-radio__label">
                        <div class="checkout-bank-transfer-item__card">
                          <div class="checkout-bank-transfer-item__icon-container">
                            <img
                              src="https://static.v2.airpay.vn/admin/channelIcon/images_v101/c134/icon_c13403_t1610003677268.png"
                              class="checkout-bank-transfer-item__icon"
                              alt=""
                            />
                          </div>
                          <div class="checkout-bank-transfer-item__main">
                            <div class="checkout-bank-transfer-item__title">VietinBank</div>
                            <div class="checkout-bank-transfer-item__subtitle checkout-bank-account-item__number">
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
      ) : null}
    </>
  );
}
export default PaymentMethods;
