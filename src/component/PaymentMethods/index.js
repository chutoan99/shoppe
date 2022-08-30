import { useState } from 'react';
import './payment_Methods.css';
let Sales = require('../../Img/sales.jpg');
let Pay = require('../../Img/pay.png');
function PaymentMethods() {
  const payment = [
    {
      id: 1,
      pay: 'Ví ShopeePay',
    },
    {
      id: 2,
      pay: 'Thẻ Tín dụng/Ghi nợ',
    },
    {
      id: 3,
      pay: 'Số dư TK Shopee(₫0)',
    },
    {
      id: 4,
      pay: 'Thanh toán khi nhận hàng',
    },
  ];
  const [banners, setBanners] = useState(false);
  return (
    <>
      <div class="checkout-payment-method-view__current checkout-payment-setting">
        <div class="checkout-payment-method-view__current-title">Phương thức thanh toán</div>
        <div class="checkout-payment-setting__payment-methods-tab">
          {payment.map((item, index) => (
            <Payment item={item} setBanners={setBanners}></Payment>
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
export function Payment(props) {
  const { item, setBanners } = props;
  const [bannerTick, setBannersTick] = useState(false);
  const [variation, setVariation] = useState('product-variation');
  const handleShowBanners = () => {
    setBanners(true);
    setBannersTick(true);
    setVariation('product-variation product-variation--selected');
  };
  const handleCloseBanners = () => {
    setBanners(false);
    setBannersTick(false);
    setVariation('product-variation');
  };
  return (
    <button class={variation} onClick={handleShowBanners} onDoubleClick={handleCloseBanners}>
      {item.pay}
      {bannerTick ? (
        <div class="product-variation__tick">
          <i class="fa-solid fa-check"></i>
        </div>
      ) : null}
    </button>
  );
}
