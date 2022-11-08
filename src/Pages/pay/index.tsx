import '../../Style/shopping.css';
import './pay.css';
import IMG from '../../assets/imgs';
import ICON from '../../assets/icons';
import { useState } from 'react';
import { LogoShopee, HeaderNavbar, TotalPay, ItemProduct, TitleTable } from '../../component/index';
import { deleteCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { addBuyCart } from '../../redux/cartSlice';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

function Pay() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userLogin } = useAppSelector((state: RootState) => state.others);
  const { data, numberCart, numberBuyCart } = useAppSelector((state: RootState) => state.cart);

  const [checked, setChecked] = useState<any>([]);
  const onDeleteCartItem = (index: any) => {
    dispatch(deleteCart(index));
  };
  const handleCheck = (itemid: any, price: any, index: any) => {
    setChecked((prev: any) => {
      const isChecked = checked.includes(index);
      if (isChecked) {
        return checked.filter((item: any) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  var totals: any = [];
  checked.forEach((e: any) => totals.push(data[e]?.price * data[e]?.amount));

  var total = 0;
  if (totals.length > 0) {
    for (let i = 0; i < totals.length; i++) {
      total += totals[i];
    }
  }

  const handleBuyCart = () => {
    var addBuyCarts: any = [];
    checked.forEach((e: any) => addBuyCarts.push(data[e]));
    if (userLogin) {
      dispatch(addBuyCart(addBuyCarts));
    }
    if (!userLogin) {
      navigate('/login');
    }
    if (numberBuyCart > 0 || userLogin) {
      navigate('/oder');
    }
  };
  return (
    <>
      <header className="Header">
        <div className="grid wide">
          <HeaderNavbar></HeaderNavbar>
          <div className="Header-with-search sm-gutter">
            <LogoShopee />
            <div className="Header__search">
              <div className="Header__search-input-wrap">
                <input
                  type="text"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                  className="Header_search-input"
                />
              </div>
              <button className="Header__search-btn">{ICON.MAGNIFYING}</button>
            </div>
          </div>
        </div>
      </header>
      {numberCart === 0 ? (
        <div className="emptyCart-img">
          <img src={IMG.EMPTY_CART} alt="emptyCart" />
        </div>
      ) : (
        <>
          <div className="App__Container mob:mt-[120px] min-h-[380px]">
            <div className="grid wide pt-[16px]">
              <div className="sm-gutter">
                <div className="grid backR">
                  <TitleTable />
                  <ItemProduct
                    data={data}
                    checked={checked}
                    handleCheck={handleCheck}
                    onDeleteCartItem={onDeleteCartItem}
                  />
                </div>
              </div>
            </div>
          </div>
          <TotalPay handleBuyCart={handleBuyCart} data={data} checked={checked} total={total} />
        </>
      )}
    </>
  );
}

export default Pay;
