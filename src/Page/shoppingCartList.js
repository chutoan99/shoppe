import '../Style/shopping.css';
import HeaderNavbar from '../component/Header_Navbar';
import SearchHistory from '../component/Serch-history';
import LogoShopee from '../component/LogoShoppe';
import { useState } from 'react';
import { deleteCart, buyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import Button from '../component/button';
import BoxSelect from '../component/boxSelect';
let Sale = require('../Img/sale.png');
let emptyCart = require('../Img/empty-cart.png');
function ShoppingCartList() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const { numberCart } = useSelector((state) => state);
  const [renderCart, setRenderCart] = useState(numberCart);
  const { dataCart } = useSelector((state) => state);
  var indexCart = 0;
  const handleCheck = (itemid, price, index) => {
    setChecked((prev) => {
      const isChecked = checked.includes(price);
      if (isChecked) {
        return checked.filter((item) => item !== price);
      } else {
        return [...prev, price];
      }
    });
    indexCart = index;
  };
  var total = 0;
  if (checked.length > 0) {
    for (let i = 0; i < checked.length; i++) {
      total += checked[i];
    }
  }
  const handleBuyCart = (amount) => {
    dispatch(buyCart(indexCart));
  };
  const onDeleteCartItem = (index) => {
    dispatch(deleteCart(index));
  };
  return (
    <>
      {renderCart === 0 ? (
        <>
          {renderHeader()}
          {renderEmptyCart()}
        </>
      ) : (
        <>
          {renderHeader()}
          <div className="App__Container mt-10">
            <div className="grid wide pt-3">
              <div className="sm-gutter">
                <div className="grid backR Hide-on-mobile Hide-on-table">
                  {renderTitleTable()}
                  <div>
                    {dataCart.map((item, index) => (
                      <div className="table-body-list">
                        <div>
                          {renderShopName(item)}
                          {renderItemList(item, index)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {renderPay(total)}
            </div>
          </div>
        </>
      )}
    </>
  );
  function renderItemList(item, index) {
    return (
      <div className="grid backR2">
        <div className="shopping_cart">
          <label class="shopping_cart-checkBox">
            <input
              type="checkbox"
              checked={checked.includes(item.price)}
              onChange={() => handleCheck(item.itemid, item.price, index)}
            />
            <span class="checkmark"></span>
          </label>
          <div className="shopping_cart-img">
            <img src={`${'https://cf.shopee.vn/file/'}${item.image}`} alt={item.name} />
          </div>
          <div className="shopping_cart-img-title">
            <h3>{item.name}</h3>
            <div className="shopping_cart-img-sale">
              <img src={Sale} alt="sale" />
            </div>
          </div>
          {item.tier_variations[0].name === '' ? null : (
            <>
              <BoxSelect item={item} />
            </>
          )}
        </div>
        <div className="shopping_cart-0ld-price">
          <h1>đ {(item.price_before_discount / 100000).toLocaleString('it-IT')}</h1>
          <h2>đ {(item.price / 100000).toLocaleString('it-IT')}</h2>
        </div>
        <div className="shopping_cart-unit-price">
          <Button amount={item.amount} />
          <div className="shopping_cart-warehouse Hide-on-mobile">
            <h1>Còn {item.stock} Sản Phẩm</h1>
          </div>
        </div>
        <div className="shopping_cart-new-price">
          <h1 className="">đ {(item.price_before_discount / 100000).toLocaleString('it-IT')}</h1>đ{' '}
          {(item.price / 100000).toLocaleString('it-IT')}
        </div>
        <div className="shopping_cart-delete">
          <h1 onClick={() => onDeleteCartItem(index)}>Xóa</h1>
          <h2>
            Sản Phẩm Tương Tự
            <i class="fa-solid fa-caret-down Hide-on-table Hide-on-mobile"></i>
          </h2>
        </div>
      </div>
    );
  }
  function renderShopName(item) {
    return (
      <div className="grid wide backR1">
        <div className="table_body-shop-name">
          <span>Yêu Thích</span>
          <h1 className="table_body-shop">{item.shop_name}</h1>
          <label className="table_body-shop-icon">
            <i class="fa-solid fa-message"></i>
          </label>
        </div>
      </div>
    );
  }
  function renderHeader() {
    return (
      <header className="Header">
        <div className="grid wide">
          <HeaderNavbar></HeaderNavbar>
          <div className="Header-with-search sm-gutter">
            <LogoShopee></LogoShopee>
            <div className="Header__search">
              <div className="Header__search-input-wrap">
                <input
                  type="text"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                  className="Header_search-input"
                />
                <SearchHistory></SearchHistory>
              </div>
              <button className="Header__search-btn">
                <i className="Header__search-btn-icon fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
  function renderEmptyCart() {
    return (
      <div className="emptyCart-img">
        <img src={emptyCart} alt="" />
      </div>
    );
  }
  function renderPay() {
    return (
      <div className="pay">
        <div className="pay1 ">
          <div className="grid">
            <div className="cart-Shopee-Voucher">
              <i class="fa-solid fa-tags"></i>
              <h1>Shopee Voucher</h1>
              <h2>Chọn Hoặc Nhập Mã</h2>
            </div>
          </div>
        </div>
        <div className="pay2">
          <div className="grid">
            <div className="cart-Shopee-coin">
              <i class="fa-solid fa-coins"></i>
              <h1>Shopee Xu</h1>
              <h2> Bạn chưa chọn sản phẩm</h2>
              <i className="fa-solid fa-circle-question"></i>
            </div>
          </div>
        </div>
        <div className="pay3">
          <div className="grid pay-container">
            <div className="select-all">
              <label class="shopping_cart-checkBox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <h1 className="Hide-on-mobile">Chọn</h1>
              <h1>Tất Cả</h1>
              <h1 className="Hide-on-mobile">({dataCart.length})</h1>
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
              <h1 className="Hide-on-mobile"> ({checked.length} Sản Phẩm):</h1>
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
    );
  }
  function renderTitleTable() {
    return (
      <div className="tile-content-container">
        <div className="title-content">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label class="shopping_cart-checkBox">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p>Sản Phẩm</p>
          </div>
        </div>
        <div className="title-content">
          <p style={{ textAlign: 'center' }}>Đơn Giá</p>
        </div>
        <div className="title-content">
          <p style={{ textAlign: 'center' }}>Số Lượng</p>
        </div>
        <div className="title-content">
          <p style={{ textAlign: 'center' }}>Số Tiền</p>
        </div>
        <div className="title-content">
          <p style={{ textAlign: 'center' }}>Thao Tác</p>
        </div>
      </div>
    );
  }
}
export default ShoppingCartList;
