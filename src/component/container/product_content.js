import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ProductContent(props) {
  const {
    item,
    amount,
    showTableSize,
    setNewOption,
    handleShowSizeTable,
    HiddenTableSize,
    handleIncrease,
    handleReduced,
    handleAddToCart,
  } = props;
  const navigate = useNavigate();
  return (
    <div className="p-[10px] mob:pt-[20px] mob:pr-[35px] mob:pl-[20px]">
      {renderItemHeading(item)}
      {renderPrice(item)}
      <div className="container-fluid container-detail">
        {renderMiniVoucher()}
        {renderTierVariations(item)}
        {renderSizeChart(item)}
        {renderTableSize(item)}
        {renderAmount()}
      </div>
      {renderBtnBuy()}
    </div>
  );
  function renderItemHeading(item) {
    return (
      <>
        <div className="product-items-heding ">
          <h2>
            <span>Yêu Thích</span>
            {item.name}
          </h2>
        </div>
        <div className="product-items-content">
          <div className="product-items-content-rating">
            <h3>{item.shop_rating.toFixed(1)}</h3>
            {renderRating()}
          </div>
          <div className="product-items-content-evaluat">
            <h3>47</h3>
            <h4>Đánh Giá</h4>
          </div>
          <div className="product-items-content-sold">
            <h3>{item.historical_sold}</h3>
            <h4>Đã bán</h4>
          </div>
        </div>
      </>
    );
  }
  function renderPrice(item) {
    return (
      <div className="product-items-price">
        <div className="product-items-old-price">
          {item.price_min_before_discount === item.price_max_before_discount ? (
            <h3>
              <sup>đ</sup>
              {(item.price_min_before_discount / 100000).toLocaleString('it-IT')}
            </h3>
          ) : (
            <h3>
              <sup>đ</sup>
              {(item.price_min_before_discount / 100000).toLocaleString('it-IT')} - <sup>đ</sup>
              {(item.price_max_before_discount / 100000).toLocaleString('it-IT')}
            </h3>
          )}
        </div>
        <div className="product-items-new-price">
          {item.price_min === item.price_max ? (
            <h3>
              <sup>đ</sup>
              {(item.price_min / 100000).toLocaleString('it-IT')}
            </h3>
          ) : (
            <h3>
              <sup>đ</sup>
              {(item.price_min / 100000).toLocaleString('it-IT')} - <sup>đ</sup>
              {(item.price_max / 100000).toLocaleString('it-IT')}
            </h3>
          )}
        </div>
        <span>{item.discount} giảm</span>
      </div>
    );
  }
  function renderTierVariations(item) {
    return (
      <>
        {item.tier_variations[0].name === '' ? null : (
          <>
            {item.tier_variations.map((variations) => (
              <>
                {variations.name === ' ' ? null : (
                  <>
                    <div className="product_cart-variation mt-[5px]">
                      <h3>{variations.name}</h3>
                    </div>
                    <div className="product_cart-option">
                      {variations.options.map((option) => (
                        <div className="product_cart-variation">
                          <Option option={option} setNewOption={setNewOption}></Option>
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
  function renderSizeChart(item) {
    return (
      <>
        {item.size_chart === null ? null : (
          <h3 className="product_cart-size-table" onClick={handleShowSizeTable}>
            bảng quy đổi kích thước
          </h3>
        )}
      </>
    );
  }
  function renderTableSize(item) {
    return (
      <>
        {showTableSize ? (
          <div className="product_cart-size-chart" onClick={HiddenTableSize}>
            <div className=" modal__size">
              <div className="modal__body">
                <img src={`${'https://cf.shopee.vn/file/'}${item.size_chart}`} alt="tableSize" />
              </div>
            </div>
          </div>
        ) : null}
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
            <button onClick={handleReduced}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <button>{amount}</button>
            <button onClick={handleIncrease}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <h2>{item.stock} sản phẩm có sẵn</h2>
        </div>
      </>
    );
  }
  function renderBtnBuy() {
    return (
      <div className="product_cart">
        <button className="product_cart-button">
          <i className="fa-solid fa-cart-plus cart-plus-animation"></i>Chat ngay
        </button>
        <button className="product_cart-button" onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-plus cart-plus-animation"></i>Thêm Vào Giỏ Hàng
        </button>
        <button className="product_cart-button2" onClick={() => navigate('/pay')}>
          Mua Ngay
        </button>
      </div>
    );
  }
  function renderRating() {
    return (
      <div className="product-items-content-rating-icons">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
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

export function Option(props) {
  const { option, setNewOption } = props;
  const [options, setOptions] = useState('');
  const handleSetOptions = (option) => {
    setOptions('product_cart-variation-active');
    if (options !== '') {
      setOptions('');
    }
    setNewOption(option);
  };
  return (
    <button className={options} onClick={() => handleSetOptions(option)}>
      {option}
    </button>
  );
}
