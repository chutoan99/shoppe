import './status_order.css';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';
import { useState } from 'react';
import { Header, Footer, DetailUser } from '../../component/index';
import { useSelector } from 'react-redux';
import { formatPriceWithAmount } from '../../utils/fomarPrice';
function StatusOrder() {
  const { orDerCart } = useSelector((state) => state.cart);
  const [confirm, setConfirm] = useState(false);
  const [emptyOrder, setEmptyOrder] = useState(false);
  const [status, setStatus] = useState(undefined);
  const handelChangeStatus = (item, index) => {
    setStatus(item);
    if (index === 1) {
      setEmptyOrder(true);
      setConfirm(false);
    }
    if (index !== 1) {
      setEmptyOrder(false);
      setConfirm(true);
    }
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
              <div className="_0obGFe">
                {['Tất cả', 'Chờ xác nhận', 'Chờ lấy hàng', 'Đang giao', 'Đã Giao', 'Đã Hủy'].map(
                  (item, index) => (
                    <span
                      className={`vAkdD0 ${status === item ? 'r-S3nG' : ''}`}
                      key={index}
                      onClick={() => handelChangeStatus(item, index)}
                    >
                      <span className="_0rjE9m">{item}</span>
                    </span>
                  )
                )}
              </div>
              {emptyOrder ? null : renderEmptyorder()}
              {confirm ? null : (
                <>
                  {!orDerCart?.length > 0 ? (
                    renderEmptyorder()
                  ) : (
                    <>
                      {orDerCart?.map((item, index) => (
                        <div className="table-body-list" key={index}>
                          <div>
                            <div className="backR1">
                              <div className="table_body-shop-name table_body-shop-name-order">
                                <span>Yêu Thích</span>
                                <h1 className="table_body-shop">{item?.shop_name}</h1>
                                <label className="table_body-shop-icon">{ICON.MESS}</label>
                              </div>
                            </div>
                            <div className="grid oderR2">
                              <div className="shopping_cart">
                                <div className="shopping_cart-img-order">
                                  <img
                                    src={`${'https://cf.shopee.vn/file/'}${item?.image}`}
                                    alt={item?.name}
                                  />
                                </div>
                                <div className="shopping_cart-img-title-order">
                                  <div className="title-order-content">{item?.name}</div>
                                  <div className="flex">
                                    {item?.tier_variations?.map((tier_variation, index) => (
                                      <div className="shopping_cart-tier_variation" key={index}>
                                        {tier_variation?.name}: <span>{item?.newOption}</span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="shopping_cart-0ld-price px-[5px]">
                                    <h2>đ {formatPriceWithAmount(item?.price_max)}</h2>
                                  </div>
                                  <div className="px-[5px] text-center">x{item?.amount}</div>
                                  <div className="shopping_cart-new-price px-[5px]">
                                    đ {formatPriceWithAmount(item?.price)}
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
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
  function renderEmptyorder() {
    return (
      <div className="LHWdmn">
        <div className="bU5w7c">
          <div className="A849D8">
            <img src={IMG.EMPTY_ORDER_IMG} alt="emptyOrder" />
          </div>
          <div className="hKbGrP">Chưa có đơn hàng</div>
        </div>
      </div>
    );
  }
}
export default StatusOrder;
