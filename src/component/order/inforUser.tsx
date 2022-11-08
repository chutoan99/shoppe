import ICON from '../../assets/icons';
function InforUser() {
  return (
    <div className="order-info">
      <h1>{ICON.LOCATION}Địa Chỉ Nhận Hàng</h1>
      <div>
        <div className="order-name">Chu toan (+84) 972712621</div>
        71/50/23 điện biên phủ, Phường 15, Quận Bình Thạnh, TP. Hồ Chí Minh <label>Mặc Định</label>
        <span>Thay Đổi</span>
      </div>
    </div>
  );
}
export default InforUser;
