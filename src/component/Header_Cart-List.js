import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports.js';
function HeaderCartList() {
  const navigate = useNavigate();
  const { dataCart } = useSelector((state) => state);
  return (
    <>
      <ul className="Header_cart-list-item">
        {dataCart.map((item, index) => (
          <li className="Header_cart-item" key={index}>
            <img
              className="Header_cart-item-img"
              src={`${'https://cf.shopee.vn/file/'}${item.image}`}
              alt=""
            />
            <div className="Header_cart-item-info">
              <div className="Header_cart-item-head">
                <h5 className="Header_cart-item-name">{item.name}</h5>
                <div className="Header_cart-item-price-wrap">
                  <span className="Header_cart-item-price">
                    đ{(item.price / 100000).toLocaleString('it-IT')}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="Header_cart-footer">
        <h3>40 thêm vào giỏ hàng</h3>
        <button
          className="btn Header_cart-view-cart btn--prinary"
          onClick={() => {
            navigate('/shoppingCartList');
          }}
        >
          Xem giỏ hàng
        </button>
      </div>
    </>
  );
}
export default HeaderCartList;
