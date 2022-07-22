import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import ToasMess from './ToasMess';
function ProductContent(props) {
  const { toast } = useSelector((state) => state);
  const [toastMess, setToastMess] = useState(toast);
  const {
    item,
    amount,
    showTableSize,
    handleShowSizeTable,
    HiddenTableSize,
    handleIncrease,
    handleReduced,
    handleAddToCart,
  } = props;
  const { numberCart } = useSelector((state) => state);
  console.log('cart', numberCart);
  const navigate = useNavigate();
  return (
    <>
      <ToasMess></ToasMess>
      <div className="padding">
        <div className="product-items-heding">
          <h2>
            <span>Yêu Thích</span>
            {item.name}
          </h2>
        </div>
        <div className="product-items-content">
          <div className="product-items-content-rating">
            <h3>{item.shop_rating.toFixed(1)}</h3>
            <div className="product-items-content-rating-icons">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
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
        <div class="container-fluid">
          <div className="row sm-gutter display">
            <div className="col s-2 c-3  l-2">
              <div className="product_cart-mini-voucher">
                <h3>Mã Giảm Giá Của Shop</h3>
              </div>
            </div>
            <div className="col s-10 c-9  l-10">
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
            </div>
          </div>
          <div className="row sm-gutter">
            <div className="col s-2 c-3  l-2">
              <div className="product_cart-mini-voucher">
                <h3>Deal Sốc</h3>
              </div>
            </div>
            <div className="col s-10 c-9  l-10">
              <div className="product_cart-mini-voucher">
                <label>Mua Kèm Deal Sốc</label>
              </div>
            </div>
          </div>

          {item.tier_variations[0].name === '' ? null : (
            <>
              {item.tier_variations.map((variations) => (
                <>
                  {variations.name === ' ' ? null : (
                    <div className="row sm-gutter">
                      <div className="col s-2 c-3  l-2">
                        <div className="product_cart-variation mt">
                          <h3>{variations.name}</h3>
                        </div>
                      </div>
                      <div className="col s-10 c-9  l-10 DISPLAY">
                        {variations.options.map((option) => (
                          <div className="product_cart-variation">
                            <button>{option}</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ))}
            </>
          )}

          <div className="row sm-gutter">
            <div className="col s-2 c-3  l-2"></div>
            <div className="col s-10 c-19  l-10">
              {item.size_chart === null ? null : (
                <h3 className="product_cart-size-table" onClick={handleShowSizeTable}>
                  bảng quy đổi kích thước
                </h3>
              )}

              {showTableSize ? (
                <div className="product_cart-size-chart" onClick={HiddenTableSize}>
                  <div className=" modal__size">
                    <div className="modal__body">
                      <img src={`${'https://cf.shopee.vn/file/'}${item.size_chart}`} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="row sm-gutter display">
            <div className="col s-2 c-3  l-2">
              <div className="product_cart-amount">
                <h3>số lượng</h3>
              </div>
            </div>
            <div className="col s-10 c-9  l-100">
              <div className="product_cart-amount">
                <div className="product_cart-amount-button">
                  <button onClick={handleReduced}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button>{amount}</button>
                  <button onClick={handleIncrease}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
                <h2>{item.stock} sản phẩm có sẵn</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="product_cart">
          <button className="product_cart-button" onClick={handleAddToCart}>
            <i class="fa-solid fa-cart-plus"></i>Thêm Vào Giỏ Hàng
          </button>
          <button className="product_cart-button2" onClick={() => navigate('/shoppingCartList')}>
            Mua Ngay
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductContent;
