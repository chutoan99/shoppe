import './Header_Cart-List.css';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/fomarPrice';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';
function HeaderCartList() {
  const navigate = useNavigate();
  const { data } = useAppSelector((state: RootState) => state.cart);
  return (
    <>
      <ul className="Header_cart-list-item">
        {data?.map((item: any, index: number) => (
          <li className="Header_cart-item" key={index}>
            <img className="Header_cart-item-img" src={`${process.env.REACT_APP_IMG_URl}${item?.image}`} alt="dataCart" />
            <div className="Header_cart-item-info">
              <div className="Header_cart-item-head">
                <h5 className="Header_cart-item-name">{item?.name}</h5>
                <div className="Header_cart-item-price-wrap">
                  <span className="Header_cart-item-price">đ{formatPrice(item?.price)}</span>
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
            navigate('/pay');
          }}
        >
          Xem giỏ hàng
        </button>
      </div>
    </>
  );
}
export default HeaderCartList;
