import { useNavigate } from 'react-router-dom';
import { HeaderCartList } from '../index';
import { useSelector } from 'react-redux/es/exports.js';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';

function HeaderCart() {
  const navigate = useNavigate();
  const { numberCart } = useSelector((state) => state.cart);
  const renderNumberCart = (numberCart) => {
    if (numberCart === 0 || numberCart === undefined) {
      return <span></span>;
    } else {
      return <span className="Header-cart-notice">{numberCart}</span>;
    }
  };
  return (
    <div
      className="Header-cart"
      onClick={() => {
        navigate('/pay');
      }}
    >
      <div className="Header-cart-wrap">
        <span className="Header-cart-icon">{ICON.SHOPPING_CART}</span>

        {renderNumberCart(numberCart)}

        {/* <!-- .Header-cart--no-cart  --> */}

        <div className="Header-cart-list">
          {numberCart > 0 ? (
            <>
              <h4 className="Header_cart-heading">Sản phẩm đã thêm</h4>
              <HeaderCartList></HeaderCartList>
            </>
          ) : (
            <div className="Header-cart--no-cart">
              <img src={IMG.NO_CART} alt="noCart" className="Header-cart--no-cart-img" />
              <p className="Header-cart-list-no-cart-msg">Chưa có sản phẩm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default HeaderCart;
