import './Header_Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderNotify } from '../index';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import { updateUserLogOut } from '../../redux/otherSlice';
import { useState } from 'react';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';

function HeaderNavbar() {
  let NumberNotyfy = 4;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Ten = localStorage.getItem('users');
  const [user, setUser] = useState(Ten || '');
  const { userLogin } = useSelector((state) => state.others);
  const handelLogOut = () => {
    dispatch(updateUserLogOut());
  };
  return (
    <nav className="Header__navbar Hide-on-mobile">
      <ul className="Heder__navbar--list">
        {renderHeaderSeparater()}
        {renderConnect()}
      </ul>
      <ul className="Heder__navbar--list">
        {renderNotify()}
        {renderHelp()}
        {userLogin ? <>{renderUserLogin()}</> : <>{renderLogin()}</>}
      </ul>
    </nav>
  );
  function renderNotify() {
    return (
      <li className="Header__nav--item Header__nav--item-has-notify">
        <a href="# " className="Header__nav--item--link hover:text-white">
          <div href="# " className="Header__navbar--icon-link ">
            <span className="Header__nav--icon">{ICON.BELL}</span>
          </div>
          <span className="Header-cart-notify-icon">{NumberNotyfy}</span>
          Thông báo
        </a>
        <HeaderNotify></HeaderNotify>
      </li>
    );
  }
  function renderConnect() {
    return (
      <li className="Header__nav--item">
        <span className="Header_nav-title--no-poiter"> Kết nối</span>
        <a href="https://www.facebook.com/ShopeeVN" className="Header__navbar--icon-link">
          <span className="Header__nav--icon">{ICON.FACE}</span>
        </a>
        <a href="https://www.instagram.com/Shopee_VN/" className="Header__navbar--icon-link">
          <span className="Header__nav--icon">{ICON.INSTAGRAM}</span>
        </a>
      </li>
    );
  }
  function renderHelp() {
    return (
      <li className="Header__nav--item">
        <a href="https://help.shopee.vn/portal" className="Header__nav--item--link">
          <a href="https://help.shopee.vn/portal" className="Header__navbar--icon-link">
            <span className="Header__nav--icon">{ICON.CIRCLE_QUESTION}</span>
          </a>
          Trợ giúp
        </a>
      </li>
    );
  }

  function renderHeaderSeparater() {
    return (
      <li className="Header__nav--item Header__nav-item--has--QR Header__nav--separater hide-on-table-middle">
        Vào cửa hàng trên ứng dụng ChuToan
        <div className="Header__qr">
          <img className="Header__qr--img" src={IMG.QRCODE} alt="qR" />
          <div className="Heder__qr--app">
            <a href="https://shopee.vn/web" className="Header__qr-link">
              <img className="Header__qr--dowload--img" src={IMG.GOOGLE} alt="Google" />
            </a>
            <a href="https://shopee.vn/web" className="Header__qr-link">
              <img className="Header__qr--dowload--img" src={IMG.APPSTORE} alt="App store" />
            </a>
          </div>
        </div>
      </li>
    );
  }
  function renderUserLogin() {
    return (
      <li className="Header__nav--item Header__nav-user">
        <img className="Header__nav-item Header__nav-user-img" src={IMG.USER_IMG} alt="UserImg" />
        <span className="Header__nav-name">{user}</span>
        <ul className="Header__nav-user-menu">
          <li className="Header__nav-user-item">
            <span href="# " onClick={() => navigate('/profile')}>
              Tài khoản của tôi
            </span>
          </li>
          <li className="Header__nav-user-item">
            <span href="# " onClick={() => navigate('/profile')}>
              Địa chỉ của tôi
            </span>
          </li>
          <li className="Header__nav-user-item">
            <span href="# " onClick={() => navigate('/statusOrder')}>
              Đơn mua
            </span>
          </li>
          <li className="Header__nav-user-item Header__nav-user-item--separate">
            <span href="# " onClick={handelLogOut}>
              Đăng xuất
            </span>
          </li>
        </ul>
      </li>
    );
  }
  function renderLogin() {
    return (
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
    );
  }
}
export default HeaderNavbar;
