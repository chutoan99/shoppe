import './profile.css';
import { useState } from 'react';
import { Footer, Header } from '../../component/index';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';

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
              <div className="flex">
                <div className="detail-user-img">
                  <img src={IMG.USER_IMG} alt="userImg"></img>
                </div>
                <div className="detail-user-name">
                  <span>chutoan</span>
                  <label>{ICON.EDIT}sửa hồ sơ</label>
                </div>
              </div>
              <div className="detail-user-content">
                <div className="detail-user-content-img">
                  <img
                    src="https://cf.shopee.vn/file/97cb82f5dd0a13419b1608c16681df9e"
                    alt="ban moi"
                  ></img>
                </div>
                <span>Ưu Đãi Dành Riêng Cho Bạn</span>
              </div>
              <div className="detail-user-content">
                <div className="detail-user-content-img">
                  <img
                    src="https://cf.shopee.vn/file/55c04c537e5744f4b5e3a3a94368fd39"
                    alt="ban moi"
                  ></img>
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
