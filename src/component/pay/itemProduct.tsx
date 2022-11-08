import { useEffect, useState } from 'react';
import ICON from '../../assets/icons';
import IMG from '../../assets/imgs';
import { useAppDispatch } from '../../hooks/hooks';
import { updateAmount } from '../../redux/cartSlice';
import { formatPrice } from '../../utils/fomarPrice';
import BoxSelect from '../container/box_Select';

interface ItemProduct {
  handleCheck: any;
  data: any;
  checked: any;

  onDeleteCartItem: any;
}

function ItemProduct({ data, checked, handleCheck, onDeleteCartItem }: ItemProduct) {
  return (
    <div>
      {data?.map((item: any, index: any) => {
        return (
          <div className="table-body-list" key={index}>
            <div>
              <div className="grid wide backR1">
                <div className="table_body-shop-name">
                  <span>Yêu Thích</span>
                  <h1 className="table_body-shop">{item?.shop_name}</h1>
                  <label className="table_body-shop-icon">{ICON.MESS}</label>
                </div>
              </div>
              <div className="grid backR2">
                <div className="shopping_cart">
                  <label className="shopping_cart-checkBox">
                    <input type="checkbox" checked={checked.includes(index)} onChange={() => handleCheck(item?.itemid, item?.price, index)} />
                    <span className="checkmark"></span>
                  </label>
                  <div className="shopping_cart-img">
                    <img src={`${process.env.REACT_APP_IMG_URl}${item?.image}`} alt={item?.name} />
                  </div>
                  <div className="shopping_cart-img-title">
                    <h3>{item?.name}</h3>
                    <div className="shopping_cart-img-sale">
                      <img src={IMG.SALE_STICKER} alt="sale" />
                    </div>
                  </div>
                  {item?.tier_variations[0]?.name === '' ? null : <BoxSelect item={item} index={index} />}
                </div>
                <div className="shopping_cart-0ld-price Hide-on-mobile">
                  <h1>đ {formatPrice(item?.price_max_before_discount)}</h1>
                  <h2>đ {formatPrice(item?.price_max)}</h2>
                </div>
                <div className="shopping_cart-unit-price">
                  <BottonAmount amount={item?.amount} index={index} />
                  <div className="shopping_cart-warehouse Hide-on-mobile">
                    <h1>Còn {item?.stock} Sản Phẩm</h1>
                  </div>
                </div>
                <div className="shopping_cart-new-price">
                  <h1 className="">đ{formatPrice(item?.price_before_discount, item?.amount)}</h1>đ {formatPrice(item?.price, item?.amount)}
                </div>
                <div className="shopping_cart-delete Hide-on-mobile">
                  <h1 onClick={() => onDeleteCartItem(index)}>Xóa</h1>
                  <h2>
                    Sản Phẩm Tương Tự
                    <span className="Hide-on-table Hide-on-mobile">{ICON.CARET_DOWN}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
interface BottonAmount {
  amount: any;
  index: any;
}
function BottonAmount({ amount, index }: BottonAmount) {
  const dispatch = useAppDispatch();
  const [newAmount, setAmount] = useState(amount);
  const handleIncrease = () => {
    setAmount(newAmount + 1);
  };
  const handleReduced = () => {
    if (newAmount > 1) {
      setAmount(newAmount - 1);
    }
    if (newAmount < 1) {
      setAmount(1);
    }
  };
  useEffect(() => {
    dispatch(
      updateAmount({
        newAmount: newAmount,
        index: index,
      })
    );
  }, [newAmount]);
  return (
    <div>
      <button className="cursor-no-drop" onClick={handleReduced}>
        {ICON.MINUS}
      </button>
      <button disabled>{newAmount}</button>
      <button className="cursor-no-drop" onClick={handleIncrease}>
        {ICON.PLUS}
      </button>
    </div>
  );
}
export default ItemProduct;
