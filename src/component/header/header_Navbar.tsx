import './Header_Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderNotify, SignOut } from '../index';
import { useState, memo } from 'react';
import IMG from '../../assets/imgs';
import ICON from '../../assets/icons';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';

function HeaderNavbar() {
  let NumberNotyfy = 4;
  const navigate = useNavigate();
  const Ten = localStorage.getItem('users');
  const [user, setUser] = useState(Ten || '');
  const { userLogin } = useAppSelector((state: RootState) => state.others);
  const { data } = useAppSelector<any>((state: RootState) => state?.user);
  return (
    <nav className="Header__navbar Hide-on-mobile">
      <ul className="Heder__navbar--list">
        {renderHeaderSeparater()}
        {renderConnect()}
      </ul>
      <ul className="Heder__navbar--list">
        {renderNotify()}
        {renderHelp()}
        {userLogin || data?.displayName || data?.photoURL ? <>{renderUserLogin()}</> : <>{renderLogin()}</>}
      </ul>
    </nav>
  );
  function renderNotify() {
    return (
      <li className="Header__nav--item Header__nav--item-has-notify">
        <a href="# " className="Header__nav--item--link hover:text-white">
          <div className="Header__navbar--icon-link ">
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
        <img className="Header__nav-item Header__nav-user-img" src={data?.photoURL || IMG.USER_IMG} alt="UserImg" />
        <span className="Header__nav-name">{data?.displayName || user}</span>
        <ul className="Header__nav-user-menu">
          <li className="Header__nav-user-item">
            <span onClick={() => navigate('/profile')}>Tài khoản của tôi</span>
          </li>
          <li className="Header__nav-user-item">
            <span onClick={() => navigate('/profile')}>Địa chỉ của tôi</span>
          </li>
          <li className="Header__nav-user-item">
            <span onClick={() => navigate('/statusOrder')}>Đơn mua</span>
          </li>
          <SignOut />
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
export default memo(HeaderNavbar);
