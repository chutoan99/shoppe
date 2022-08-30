import './detail_user.css';
let userImg = require('../../Img/User.jpg');
function DetailUser() {
  return (
    <div className="detail-user">
      <div className="flex">
        <div className="detail-user-img">
          <img src={userImg} alt="userImg"></img>
        </div>
        <div className="detail-user-name">
          <span>chutoan</span>
          <label>
            <i className="fa-solid fa-pen"></i>sửa hồ sơ
          </label>
        </div>
      </div>
      <div className="detail-user-content">
        <div className="detail-user-content-img">
          <img src="https://cf.shopee.vn/file/97cb82f5dd0a13419b1608c16681df9e" alt="ban moi"></img>
        </div>
        <span>Ưu Đãi Dành Riêng Cho Bạn</span>
      </div>
      <div className="detail-user-content">
        <div className="detail-user-content-img">
          <img src="https://cf.shopee.vn/file/55c04c537e5744f4b5e3a3a94368fd39" alt="ban moi"></img>
        </div>
        <span>25.8 Lương Về Sale To</span>
      </div>
      <div className="detail-user-detail">
        <div className="detail-user-detail-img">
          <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
        </div>
        <span>Tài khoản của tôi</span>
      </div>
      <div className="detail-user-detail">
        <div className="detail-user-detail-img">
          <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="" />
        </div>
        <span>Đơn Mua</span>
      </div>
      <div className="detail-user-detail">
        <div className="detail-user-detail-img">
          <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" alt="" />
        </div>
        <span>Thông Báo</span>
      </div>
      <div className="detail-user-detail">
        <div className="detail-user-detail-img">
          <img src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748" alt="" />
        </div>
        <span>Kho Voucher</span>
      </div>
      <div className="detail-user-detail">
        <div className="detail-user-detail-img">
          <img src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="" />
        </div>
        <span>Shoppe Xu</span>
      </div>
    </div>
  );
}
export default DetailUser;
