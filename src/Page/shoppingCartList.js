import '../Style/shopping.css';
import HeaderNavbar from '../component/Header_Navbar';
import SearchHistory from '../component/Serch-history';
import LogoShopee from '../component/LogoShoppe';
import { useState } from 'react';
import { deleteCart, buyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
let Sale = require('../Img/sale.png');
let emptyCart = require('../Img/empty-cart.png');
function ShoppingCartList() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [amount, setAmount] = useState(1);
  const { numberCart } = useSelector((state) => state);
  const [renderCart, setRenderCart] = useState(numberCart);
  const { dataCart } = useSelector((state) => state);
  const [boxSelect, setBoxSelect] = useState('box-select hiden');
  const handleIncrease = (item) => {
    if (item.itemid === item.itemid) {
      setAmount(amount + 1);
      console.log('tr');
    } else {
      console.log('fl');
      setAmount(amount);
    }
  };
  const handleReduced = (item) => {
    console.log(item);
    if (amount > 1) {
      setAmount(amount - 1);
    }
    if (amount < 1) {
      setAmount(1);
    }
  };
  const handleShowBoxSelect = () => {
    setBoxSelect('box-select');
  };
  const onDeleteCartItem = (index) => {
    dispatch(deleteCart(index));
  };
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
  const [pay, setPay] = useState(10);
  var total = 0;
  if (checked.length > 0) {
    for (let i = 0; i < checked.length; i++) {
      total += checked[i];
    }
  }
  console.log('pay', pay);
  const handleBuyCart = () => {
    dispatch(buyCart(indexCart));
  };
  return (
    <>
      {renderCart === 0 ? (
        <>
          <header className="Header">
            <div className="grid wide">
              <HeaderNavbar></HeaderNavbar>

              <div className="Header-with-search sm-gutter">
                <div className="l-2 m-0-2  c-2">
                  <LogoShopee />
                </div>
                <div className="l-3 m-0-3  c-3 Hide-on-table"></div>
                <div className="l-7 m-0-7  c-7 display">
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
                  ;
                </div>
              </div>
            </div>
          </header>
          <div className="emptyCart-img">
            <img src={emptyCart} alt="" />
          </div>
        </>
      ) : (
        <>
          <header className="Header">
            <div className="grid wide">
              <HeaderNavbar></HeaderNavbar>

              <div className="Header-with-search sm-gutter">
                <div className="l-2 m-0-2  c-2">
                  <LogoShopee />
                </div>
                <div className="l-3 m-0-3  c-3 Hide-on-table"></div>
                <div className="l-7 m-0-7  c-7 display">
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
                  ;
                </div>
              </div>
            </div>
          </header>

          <div className="App__Container marginT">
            <div className="grid wide">
              <div className="sm-gutter app-content">
                <div className="grid backR Hide-on-mobile Hide-on-table">
                  <div className="l-5 mo-5">
                    <div className="title-content">
                      <p>Sản Phẩm</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="title-content">
                      <p style={{ textAlign: 'center' }}>Đơn Giá</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="title-content">
                      <p style={{ textAlign: 'center' }}>Số Lượng</p>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="title-content">
                      <p style={{ textAlign: 'center' }}>Số Tiền</p>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="title-content">
                      <p style={{ textAlign: 'center' }}>Thao Tác</p>
                    </div>
                  </div>
                </div>
                {dataCart.map((item, index) => (
                  <div className="table-body-list">
                    <div className="grid wide backR1">
                      <div className="col-lg-12 col-sm-12 c-12">
                        <div className="table_body-shop-name">
                          <span>Yêu Thích</span>
                          <h1 className="table_body-shop">{item.shop_name}</h1>
                          <label className="table_body-shop-icon">
                            <i class="fa-solid fa-message"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid backR2">
                      <div className="col-lg-5 col-sm-6 col-12">
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
                            <img
                              src={`${'https://cf.shopee.vn/file/'}${item.image}`}
                              alt={item.name}
                            />
                          </div>
                          <div className="shopping_cart-img-title">
                            <h3>{item.name}</h3>
                            <div className="shopping_cart-img-sale">
                              <img src={Sale} alt="sale" />
                            </div>
                          </div>
                          {item.tier_variations[0].name === '' ? null : (
                            <>
                              <div
                                className="shopping_cart-classify Hide-on-mobile Hide-on-table"
                                onClick={handleShowBoxSelect}
                              >
                                <h1 className="shopping_cart-classify-icon">
                                  Phân Loại Hàng<i class="fa-solid fa-caret-down"></i>
                                </h1>
                                <div className={boxSelect}>
                                  {item.tier_variations.map((variations) => (
                                    <div className="row sm-gutter">
                                      {variations.name === ' ' ? null : (
                                        <>
                                          <div className="l-3 ">
                                            <div className="product_cart-content-variation">
                                              <h3>{variations.name}</h3>
                                            </div>
                                          </div>
                                          <div className="l-9 product_cart-content-variation-item">
                                            {variations.options.map((option) => (
                                              <div className="product_cart-content-variation">
                                                <button>{option}</button>
                                              </div>
                                            ))}
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-2 Hide-on-table Hide-on-mobile">
                        <div className="shopping_cart-0ld-price">
                          <h1>đ {(item.price_before_discount / 100000).toLocaleString('it-IT')}</h1>
                          <h2>đ {(item.price / 100000).toLocaleString('it-IT')}</h2>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-2 col-3">
                        <div className="shopping_cart-unit-price">
                          <button onClick={() => handleReduced(item)}>
                            <i class="fa-solid fa-minus"></i>
                          </button>
                          <button>{amount}</button>
                          <button onClick={() => handleIncrease(item)}>
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <div className="shopping_cart-warehouse Hide-on-mobile">
                          <h1>Còn {item.stock} Sản Phẩm</h1>
                        </div>
                      </div>

                      <div className="col-lg-1 col-sm-2 col-4">
                        <div className="shopping_cart-new-price">
                          <h1 className="">
                            đ {(item.price_before_discount / 100000).toLocaleString('it-IT')}
                          </h1>
                          đ {((item.price * amount) / 100000).toLocaleString('it-IT')}
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-2 col-5">
                        <div className="shopping_cart-delete">
                          <h1 onClick={() => onDeleteCartItem(index)}>Xóa</h1>
                          <h2>
                            Sản Phẩm Tương Tự
                            <i class="fa-solid fa-caret-down Hide-on-table Hide-on-mobile"></i>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pay">
                <div className="pay1 ">
                  <div className="grid row">
                    <div className="l-7 m-6"></div>
                    <div className="l-2 mo-3 c-6">
                      <div className="cart-Shopee-Voucher">
                        <i class="fa-solid fa-tags"></i>
                        <h1>Shopee Voucher</h1>
                      </div>
                    </div>
                    <div className="l-3 mo-3 c-6">
                      <div className="cart-Shopee-Voucher">
                        <h2>Chọn Hoặc Nhập Mã</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pay2">
                  <div className="grid row">
                    <div className="l-7 m-6"></div>

                    <div className="l-5 m-6">
                      <div className="cart-Shopee-coin">
                        <i class="fa-solid fa-coins"></i>
                        <h1>Shopee Xu</h1>
                        <h2> Bạn chưa chọn sản phẩm</h2>
                        <i class="fa-solid fa-circle-question"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pay3">
                  <div className="grid row dp">
                    <div className="l-2 mo-4 c-2">
                      <div className="select-all">
                        <label class="shopping_cart-checkBox">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </label>
                        <h1 className="Hide-on-mobile">Chọn</h1>
                        <h1>Tất Cả</h1>
                        <h1 className="Hide-on-mobile">({dataCart.length})</h1>
                      </div>
                    </div>
                    <div className="l-3 mo-4 Hide-on-mobile">
                      <div className="shopping_cart-delete-total">
                        <span>Xóa</span>
                        <h2>Bỏ sản Phẩm Không Hoạt Động</h2>
                      </div>
                    </div>
                    <div className="l-2 mo-4 Hide-on-mobile">
                      <div className="shopping_cart-save">
                        <h1>Lưu Vào Thư Mục Đã Thích</h1>
                      </div>
                    </div>
                    <div className="mo-3 show" style={{ display: 'none' }}></div>
                    <div className="l-3 mo-4 c-4">
                      <div className="shopping_cart-total-pay">
                        <h1>Tổng Thanh Toán</h1>
                        <h1 className="Hide-on-mobile"> ({checked.length} Sản Phẩm):</h1>
                        <span>
                          <sup>đ</sup>
                          {((total * amount) / 100000).toLocaleString('it-IT')}
                        </span>
                      </div>
                    </div>

                    <div className="l-2 mo-4 c-6">
                      <button className="cart-btn-pay" onClick={handleBuyCart}>
                        Mua Hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ShoppingCartList;
