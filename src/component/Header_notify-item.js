let logoSale = require('../Img/f.jpg');

function HeaderNotifyItem() {
  return (
    <li className="Header_notify-item Header_notify-item--viewed">
      <a href="# " className="Header_notify-link">
        <div>
          <img src={logoSale} alt="" className="Header_notify-img" />
        </div>
        <div className="Header_notify-infor">
          <span className="Header_notify-name">SIÊU SALE HÀNG QUỐC TẾ DƯỚI 99K </span>
          <span className="Header_notify-description">
            Mắt kính, trang sức, quần áo từ 69k, Đồng hồ phụ kiện công nghệ từ 90k, Có thêm quà tặng
            kèm hấp dẫn, Deal xịn giá rẻ-Sắm ngay!
          </span>
        </div>
      </a>
    </li>
  );
}
export default HeaderNotifyItem;
