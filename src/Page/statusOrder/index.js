import './status_order.css';
import { useState } from 'react';
import Footer from '../../component/footer/index.js';
import Header from '../../component/header/index.js';
import DetailUser from '../../component/detailUser';
import { useSelector } from 'react-redux';
let emptyOrderImg = require('../../Img/empty_order.png');
function StatusOrder() {
  const active = 'r-S3nG';
  const { statusOrder } = useSelector((state) => state);
  const [confirm, setConfirm] = useState(false);
  const [emptyOrder, setEmptyOrder] = useState(true);
  const handeShowConfirm = () => {
    setEmptyOrder(!emptyOrder);
    setConfirm(true);
  };
  const handleShowEmptyOrder = () => {
    setEmptyOrder(true);
    setConfirm(false);
  };
  return (
    <div>
      <Header />
      <div className="pt-[120px]"></div>
      <div style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-fuil p-[20px]">
          <div className="row">
            <div className="col-lg-2">
              <DetailUser />
            </div>
            <div className="col-lg-10">
              <div class="_0obGFe">
                <span class="vAkdD0" onClick={handleShowEmptyOrder}>
                  <span class="_0rjE9m">Tất cả</span>
                </span>
                <span class="vAkdD0" onClick={handeShowConfirm}>
                  <span class="_0rjE9m">Chờ xác nhận</span>
                </span>
                <span class="vAkdD0" onClick={handleShowEmptyOrder}>
                  <span class="_0rjE9m">Chờ lấy hàng</span>
                </span>
                <span class="vAkdD0" onClick={handleShowEmptyOrder}>
                  <span class="_0rjE9m">Đang giao</span>
                </span>
                <span class="vAkdD0" onClick={handleShowEmptyOrder}>
                  <span class="_0rjE9m">Đã Giao</span>
                </span>
                <span class="vAkdD0" onClick={handleShowEmptyOrder}>
                  <span class="_0rjE9m">Đã Hủy</span>
                </span>
              </div>
              {emptyOrder ? renderEmptyorder() : null}
              {confirm ? (
                <>
                  {!statusOrder.length > 0 ? (
                    renderEmptyorder()
                  ) : (
                    <>
                      {statusOrder.map((item, index) => (
                        <div className="table-body-list" key={index}>
                          <div>
                            <div className="backR1">
                              <div className="table_body-shop-name table_body-shop-name-order">
                                <span>Yêu Thích</span>
                                <h1 className="table_body-shop">{item.shop_name}</h1>
                                <label className="table_body-shop-icon">
                                  <i className="fa-solid fa-message"></i>
                                </label>
                              </div>
                            </div>
                            <div className="grid oderR2">
                              <div className="shopping_cart">
                                <div className="shopping_cart-img-order">
                                  <img
                                    src={`${'https://cf.shopee.vn/file/'}${item.image}`}
                                    alt={item.name}
                                  />
                                </div>
                                <div className="shopping_cart-img-title-order">
                                  <div className="title-order-content">{item.name}</div>
                                  <div className="flex">
                                    {item.tier_variations.map((tier_variation) => (
                                      <div className="shopping_cart-tier_variation">
                                        {tier_variation.name}: <span>{item.newOption}</span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="shopping_cart-0ld-price px-[5px]">
                                    <h2>đ {(item.price_max / 100000).toLocaleString('it-IT')}</h2>
                                  </div>
                                  <div className="px-[5px] text-center">x{item.amount}</div>
                                  <div className="shopping_cart-new-price px-[5px]">
                                    đ {(item.price / 100000).toLocaleString('it-IT')}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  function renderEmptyorder() {
    return (
      <div class="LHWdmn">
        <div class="bU5w7c">
          <div class="A849D8">
            <img src={emptyOrderImg} alt="emptyOrder" />
          </div>
          <div class="hKbGrP">Chưa có đơn hàng</div>
        </div>
      </div>
    );
  }
}
export default StatusOrder;
