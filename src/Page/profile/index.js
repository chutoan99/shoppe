import './profile.css';
import { useState } from 'react';
import Footer from '../../component/footer/index';
import Header from '../../component/header/index.js';
let userImg = require('../../Img/User.jpg');
function Profile() {
  const [avatar, setAvatar] = useState(
    'blob:http://localhost:3000/0bc8bd1e-f41d-4854-977f-1d6bc476988f'
  );
  const onImageChange = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <div>
      <Header />
      <div className="grid wide">
        <div className="row py">
          <div className="col-lg-3">
            <div className="detail-user">
              <div className="detail-user-img">
                <img src={userImg} alt="userImg"></img>
              </div>
              <div className="detail-user-name">
                <span>chutoan</span>
                <span>
                  <i className="fa-solid fa-pen"></i>sửa hồ sơ
                </span>
              </div>
              <div className="detail-user-content">
                <img
                  src="https://cf.shopee.vn/file/97cb82f5dd0a13419b1608c16681df9e"
                  alt="ban moi"
                ></img>
                <span>Ưu Đãi Dành Riêng Cho Bạn</span>
              </div>
              <div className="detail-user-content">
                <img
                  src="https://cf.shopee.vn/file/55c04c537e5744f4b5e3a3a94368fd39"
                  alt="ban moi"
                ></img>
                <span>25.8 Lương Về Sale To</span>
              </div>
              <div className="detail-user-content">
                <i className="fa-solid fa-user"></i>
                <span>Tài khoản của tôi</span>
                <label>Hồ sơ</label>
                <label>Ngân hàng</label>
                <label>Địa chỉ</label>
              </div>
              <div className="detail-user-content">
                <i className="fa-solid fa-memo"></i>
                <span>Đơn Mua</span>
              </div>
              <div className="detail-user-content">
                <i className="fa-solid fa-memo"></i>
                <span>Thông Báo</span>
              </div>
              <div className="detail-user-content">
                <i className="fa-brands fa-cc-discover"></i>
                <span>Kho Voucher</span>
              </div>
              <div className="detail-user-content">
                <i class="fa-regular fa-coin"></i>
                <span>Shoppe Xu</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="profile">
              <section className="profile__title">
                <span style={{ textTransform: 'capitalize', fontSize: '25px' }}>Hồ sơ của tôi</span>
                <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
              </section>
              <div className="profile__main">
                <section className="profile__main__edit">
                  <div className="form">
                    <p>Tên Đăng Nhập:</p>
                    <div className="group">
                      <label>Tên:</label>
                      <input type="text" />
                    </div>
                    <div className="group">
                      <label>SĐT:</label>
                      <input type="text" />
                    </div>
                    <div className="group">
                      <label>Ngày</label>
                      <select></select>
                      <label>Tháng</label>
                      <select></select>
                      <label>Năm</label>
                      <select></select>
                    </div>
                    <button className="btnUpdate">Lưu</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <section className="profile__main__avatar">
              <div className="changeAvatar">
                <div className="user-img">
                  {avatar && <img src={avatar || avatar.preview} alt="user" />}
                </div>
                <input type="file" accept="image/*" onChange={(e) => onImageChange(e)} />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Profile;
