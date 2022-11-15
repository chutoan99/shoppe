import './status_order.css';
import IMG from '../../assets/imgs';
import ICON from '../../assets/icons';
import { memo, useState } from 'react';
import { DetailUser } from '../../component/index';
import { Footer, Header } from '../../containers/index';
import { formatPrice } from '../../utils/fomarPrice';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';

function StatusOrder() {
  const { orDerCart } = useAppSelector<any>((state: RootState) => state.cart);
  const [confirm, setConfirm] = useState(false);
  const [emptyOrder, setEmptyOrder] = useState(false);
  const [status, setStatus] = useState(undefined);
  const handelChangeStatus = (item: any, index: number) => {
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
              <div className="w-full mb-[12px] flex overflow-hidden bg-[#fff]" style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '2px' }}>
                {['Tất cả', 'Chờ xác nhận', 'Chờ lấy hàng', 'Đang giao', 'Đã Giao', 'Đã Hủy'].map((item, index) => (
                  <span className={`vAkdD0 ${status === item ? 'r-S3nG' : ''}`} key={index} onClick={() => handelChangeStatus(item, index)}>
                    <span className="_0rjE9m">{item}</span>
                  </span>
                ))}
              </div>
              {emptyOrder ? null : (
                <div className="w-full h-[600px] text-center">
                  <div className="flex rounded-[0.125rem] overflow-hidden flex-col justify-center w-full h-full bg-white items-center" style={{ boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)' }}>
                    <div className="A849D8">
                      <img src={IMG.EMPTY_ORDER_IMG} alt="emptyOrder" />
                    </div>
                    <div className="text-[1.125rem] leading-[1.4rem] mt-[20px]" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
                      Chưa có đơn hàng
                    </div>
                  </div>
                </div>
              )}
              {confirm ? null : (
                <>
                  {orDerCart?.length > 0 ? (
                    <>
                      {orDerCart?.map((item: any, index: any) => (
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
                                  <img src={`${process.env.REACT_APP_IMG_URl}${item?.image}`} alt={item?.name} />
                                </div>
                                <div className="shopping_cart-img-title-order">
                                  <div className="title-order-content">{item?.name}</div>
                                  <div className="flex">
                                    {item?.tier_variations?.map((tier_variation: any, index: any) => (
                                      <div className="shopping_cart-tier_variation" key={index}>
                                        {tier_variation?.name}: <span>{item?.newOption}</span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="shopping_cart-0ld-price px-[5px]">
                                    <h2>đ {formatPrice(item?.price_max)}</h2>
                                  </div>
                                  <div className="px-[5px] text-center">x{item?.amount}</div>
                                  <div className="shopping_cart-new-price px-[5px]">đ {formatPrice(item?.price)}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="w-full h-[600px] text-center">
                      <div className="flex rounded-[0.125rem] overflow-hidden flex-col justify-center w-full h-full bg-white items-center" style={{ boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)' }}>
                        <div className="A849D8">
                          <img src={IMG.EMPTY_ORDER_IMG} alt="emptyOrder" />
                        </div>
                        <div className="text-[1.125rem] leading-[1.4rem] mt-[20px]" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>
                          Chưa có đơn hàng
                        </div>
                      </div>
                    </div>
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
}
export default memo(StatusOrder);
