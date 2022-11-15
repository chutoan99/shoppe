import ICON from '../../assets/icons';
import { formatPrice } from '../../utils/fomarPrice';
import React, { memo } from 'react';

interface CartOder {
  buyCart: any;
  priceShip: number;
}
function CartOder({ buyCart, priceShip }: CartOder) {
  return (
    <>
      {buyCart?.map((item: any, index: any) => (
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
                  <img src={`${process.env.REACT_APP_IMG_URl}${item?.image}`} alt={item.name} />
                </div>
                <div className="shopping_cart-img-title-order">
                  <div className="title-order-content">{item?.name}</div>
                  <div className="flex">
                    {item?.tier_variations?.map((tier_variation: any, index: any) => (
                      <div className="shopping_cart-tier_variation" key={index}>
                        {tier_variation?.name} <span>{item?.newOption}</span>
                      </div>
                    ))}
                  </div>
                  <div className="shopping_cart-0ld-price px-[5px]">
                    <h2>đ {formatPrice(item?.price_max)}</h2>
                  </div>
                  <div className="px-[5px] text-center">x{item.amount}</div>
                  <div className="shopping_cart-new-price px-[5px]">đ {formatPrice(item?.price, item?.amount)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-container">
            <div className="order-note">
              <span>Lời nhắn:</span>
              <div className="order-note-input">
                <input placeholder="Lưu Ý Cho Người Bán..." type="text"></input>
              </div>
            </div>
            <div className="order-ship">
              <div className="order-shipping-unit">
                <span>Đơn vị vận chuyển</span>
                <p>Nhanh</p>
                <label>Thay Đổi</label>
                <h2> đ {(priceShip / 100000).toLocaleString('it-IT')}</h2>
              </div>
              <div className="order-received-date">
                <p>Nhận hàng vào 27 Th08 - 30 Th08</p>
                <p> (Nhanh tay vào ngay "Shopee Voucher" để săn mã Miễn phí vận chuyển nhé!)</p>
              </div>
            </div>
          </div>
          <div className="order-price">
            <span>Tổng số tiền ({item?.amount} sản phẩm):</span>
            <label>đ{formatPrice(item?.price, item?.amount, priceShip)}</label>
          </div>
        </div>
      ))}
    </>
  );
}
export default memo(CartOder);
