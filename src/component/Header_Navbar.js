import HeaderNotify from './Header_notify';
import { useSelector } from 'react-redux/es/exports.js';
import { Link } from 'react-router-dom';
let AppStoreImg = require('../Img/AppStore.png');
let QRcodeImg = require('../Img/QRcode.png');
let GooglePlayImg = require('../Img/GooglePlay.png');
let UserImg = require('../Img/User.jpg');
let NumberNotyfy = 4;
function HeaderNavbar() {
  const { userLogin } = useSelector((state) => state);
  return (
    <nav className="Header__navbar Hide-on-mobile ">
      <ul className="Heder__navbar--list">
        <li className="Header__nav--item Header__nav-item--has--QR Header__nav--separater">
          Vào cửa hàng trên ứng dụng ChuToan
          <div className="Header__qr">
            <img className="Header__qr--img" src={QRcodeImg} alt="qR" />
            <div className="Heder__qr--app">
              <a href="https://shopee.vn/web" className="Header__qr-link">
                <img className="Header__qr--dowload--img" src={GooglePlayImg} alt="Google" />
              </a>
              <a href="https://shopee.vn/web" className="Header__qr-link">
                <img className="Header__qr--dowload--img" src={AppStoreImg} alt="App store" />
              </a>
            </div>
          </div>
        </li>
        <li className="Header__nav--item">
          <span className="Header_nav-title--no-poiter"> Kết nối</span>
          <a href="https://www.facebook.com/ShopeeVN" className="Header__navbar--icon-link">
            {' '}
            <i className="Header__nav--icon fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/Shopee_VN/" className="Header__navbar--icon-link">
            {' '}
            <i className="Header__nav--icon fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <ul className="Heder__navbar--list">
        <li className="Header__nav--item Header__nav--item-has-notify">
          <a href="# " className="Header__nav--item--link">
            <a href="# " className="Header__navbar--icon-link">
              <i className="Header__nav--icon far fa-bell"></i>
            </a>
            <span className="Header-cart-notify-icon">{NumberNotyfy}</span>
            Thông báo
          </a>
          <HeaderNotify></HeaderNotify>
        </li>
        <li className="Header__nav--item">
          <a href="https://help.shopee.vn/portal" className="Header__nav--item--link">
            <a href="https://help.shopee.vn/portal" className="Header__navbar--icon-link">
              <i className="Header__nav--icon fa-solid fa-circle-question"></i>
            </a>
            Trợ giúp
          </a>
        </li>
        {/* khi đăng nhập tài khoản thì sẽ tắt 2 thẻ đăng ký và đăng nhập này */}
        {userLogin ? (
          <li className="Header__nav--item Header__nav-user">
            <img className="Header__nav-item Header__nav-user-img" src={UserImg} alt="" />
            <span className="Header__nav-name">Toàn Trương</span>
            <ul className="Header__nav-user-menu">
              <li className="Header__nav-user-item">
                <a href="# ">Tài khoản của tôi</a>
              </li>
              <li className="Header__nav-user-item">
                <a href="# ">Địa chỉ của tôi</a>
              </li>
              <li className="Header__nav-user-item">
                <a href="# ">Đơn mua</a>
              </li>
              <li className="Header__nav-user-item Header__nav-user-item--separate">
                <a href="# ">Đăng xuất</a>
              </li>
            </ul>
          </li>
        ) : (
          <>
            <div>
              <li className="Header__nav--item Header__nav--separater">
                <Link to="/register" className="Header__nav--item--link Header__nav--item--strong">
                  Đăng ký
                </Link>
              </li>
            </div>
            <div>
              <li className="Header__nav--item">
                <Link to="/login" className="Header__nav--item--link Header__nav--item--strong">
                  Đăng nhập
                </Link>
              </li>
            </div>
          </>
        )}
        {/* khi đăng nhập tài khoản thì sẽ tắt 2 thẻ đăng ký và đăng nhập này */}
      </ul>
    </nav>
  );
}
export default HeaderNavbar;
