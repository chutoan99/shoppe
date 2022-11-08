import { HeaderNotifyItem } from '../index';
function HeaderNotify() {
  return (
    <div className="Header_notify">
      <header className="Header_notify-header">
        <h3> Thông báo mới nhận </h3>
      </header>
      <ul className="Header_notify-list">
        <HeaderNotifyItem />
        <HeaderNotifyItem />
        <HeaderNotifyItem />
      </ul>
      <footer className="Header__notify-footer">
        <a href="# " className="Header__notify-btn">
          Xem tất cả
        </a>
      </footer>
    </div>
  );
}
export default HeaderNotify;
