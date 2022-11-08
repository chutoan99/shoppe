import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ICON from '../../assets/icons';
import { formatPrice } from '../../utils/fomarPrice';
import { generateStart } from '../../utils/generateStart';
interface ProductContent {
  item: any;
  amount: any;
  NewOption: any;
  setNewOption: any;
  handleIncrease: any;
  handleReduced: any;
  handleAddToCart: any;
}
function ProductContent({ item, amount, NewOption, setNewOption, handleIncrease, handleReduced, handleAddToCart }: ProductContent) {
  const navigate = useNavigate();
  const [showTableSize, setShowTableSize] = useState(false);

  return (
    <div className="p-[10px] mob:pt-[20px] ">
      {renderItemHeading(item)}
      {renderPrice(item)}
      <div className="container-fluid container-detail">
        {renderMiniVoucher()}
        {renderTierVariations(item)}
        {item?.size_chart && (
          <h3 className="product_cart-size-table" onClick={() => setShowTableSize(true)}>
            bảng quy đổi kích thước
          </h3>
        )}
        {showTableSize && (
          <div className="product_cart-size-chart" onClick={() => setShowTableSize(false)}>
            <div className=" modal__size">
              <div className="modal__body">
                <img src={`${process.env.REACT_APP_IMG_URl}${item?.size_chart}`} alt="tableSize" />
              </div>
            </div>
          </div>
        )}
        {renderAmount()}
      </div>
      {renderBtnBuy()}
    </div>
  );
  function renderItemHeading(item: any) {
    return (
      <>
        <div className="product-items-heding ">
          <h2>
            <span>Yêu Thích</span>
            {item?.name}
          </h2>
        </div>
        <div className="product-items-content">
          <div className="product-items-content-rating">
            <h3>{item?.shop_rating.toFixed(1)}</h3>
            <div className="product-items-content-rating-icons">{generateStart(5)}</div>
          </div>
          <div className="product-items-content-evaluat">
            <h3>47</h3>
            <h4>Đánh Giá</h4>
          </div>
          <div className="product-items-content-sold">
            <h3>{item?.historical_sold}</h3>
            <h4>Đã bán</h4>
          </div>
        </div>
      </>
    );
  }
  function renderPrice(item: any) {
    return (
      <div className="product-items-price">
        <div className="product-items-old-price">
          {item?.price_min_before_discount === item?.price_max_before_discount ? (
            <h3>
              <sup>đ</sup>
              {formatPrice(item?.price_min_before_discount)}
            </h3>
          ) : (
            <h3>
              <sup>đ</sup>
              {formatPrice(item?.price_min_before_discount)}- <sup>đ</sup>
              {formatPrice(item?.price_max_before_discount)}
            </h3>
          )}
        </div>
        <div className="product-items-new-price">
          {item?.price_min === item?.price_max ? (
            <h3>
              <sup>đ</sup>
              {formatPrice(item?.price_min)}
            </h3>
          ) : (
            <h3>
              <sup>đ</sup>
              {formatPrice(item?.price_min)}- <sup>đ</sup>
              {formatPrice(item?.price_max)}
            </h3>
          )}
        </div>
        <span>{item?.discount} giảm</span>
      </div>
    );
  }
  function renderTierVariations(item: any) {
    return (
      <>
        {item?.tier_variations[0].name === '' ? null : (
          <>
            {item?.tier_variations.map((variations: any, index: any) => (
              <>
                {variations?.name === ' ' ? null : (
                  <>
                    <div className="product_cart-variation mt-[5px]">
                      <h3>{variations?.name}</h3>
                    </div>
                    <div className="product_cart-option">
                      {variations?.options.map((option: any, index: any) => (
                        <div className="product_cart-variation" key={index}>
                          <button className={`${NewOption === option ? 'product_cart-variation-active' : ''}`} onClick={() => setNewOption(option)}>
                            {option}
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            ))}
          </>
        )}
      </>
    );
  }
  function renderAmount() {
    return (
      <>
        <div className="product_cart-amount">
          <h3>số lượng</h3>
        </div>
        <div className="product_cart-amount">
          <div className="product_cart-amount-button">
            <button onClick={handleReduced}>{ICON.MINUS}</button>
            <button>{amount}</button>
            <button onClick={handleIncrease}>{ICON.PLUS}</button>
          </div>
          <h2>{item?.stock} sản phẩm có sẵn</h2>
        </div>
      </>
    );
  }
  function renderBtnBuy() {
    return (
      <div className="product_cart ">
        <button className="product_cart-button mob:hidden">{ICON.CART}Chat ngay</button>
        <button className="product_cart-button" onClick={handleAddToCart}>
          <span className="cart-plus-animation">{ICON.CART}</span>Thêm Vào Giỏ Hàng
        </button>
        <button className="product_cart-button2" onClick={() => navigate('/pay')}>
          Mua Ngay
        </button>
      </div>
    );
  }
  function renderMiniVoucher() {
    return (
      <>
        <div className="product_cart-mini-voucher">
          <h3>Mã Giảm Giá Của Shop</h3>
        </div>
        <div className="product_cart-mini-voucher">
          <label>
            Giảm <sup className="product_cat-mimi-đ">đ</sup> 100k
          </label>
          <label>
            Giảm <sup className="product_cat-mimi-đ">đ</sup> 50k
          </label>
          <label>
            Giảm <sup className="product_cat-mimi-đ">đ</sup> 30k
          </label>
          <label>
            Giảm <sup className="product_cat-mimi-đ">đ</sup> 20k
          </label>
        </div>
        <div className="product_cart-mini-voucher">
          <h3>Deal Sốc</h3>
        </div>
        <div className="product_cart-mini-voucher">
          <label>Mua Kèm Deal Sốc</label>
        </div>
      </>
    );
  }
}
export default ProductContent;
