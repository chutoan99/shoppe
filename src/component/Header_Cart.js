import HeaderCartList from './Header_Cart-List';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports.js';
let noCart = require('../Img/no-cart.png');
function HeaderCart() {
  const navigate = useNavigate();
  const { numberCart } = useSelector((state) => state);
  const renderNumberCart = (numberCart) => {
    if (numberCart === 0) {
      return null;
    } else {
      return <span className="Header-cart-notice">{numberCart}</span>;
    }
  };
  return (
    <div
      className="Header-cart"
      onClick={() => {
        navigate('/shoppingCartList');
      }}
    >
      <div className="Header-cart-wrap">
        <i className="Header-cart-icon fa-solid fa-cart-shopping"></i>
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
              <img src={noCart} alt="" className="Header-cart--no-cart-img" />
              <p className="Header-cart-list-no-cart-msg">Chưa có sản phẩm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default HeaderCart;
