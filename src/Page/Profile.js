import Header from '../component/Header.js';
function Profile() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="profile">
          <section className="profile__title">
            <span style={{ textTransform: 'capitalize', fontSize: '25px' }}>Hồ sơ của tôi</span>
            <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
          </section>
          <div className="profile__main">
            <section className="profile__main__edit">
              <div className="form">
                <div className="group">
                  <label>SĐT:</label>
                  <input readOnly type="text" />
                </div>
                <div className="group">
                  <label>Tên:</label>
                  <input type="text" />
                </div>
                <div className="group">
                  <label>Địa chỉ:</label>
                  <input type="text" />
                </div>
                <button className="btnUpdate">Lưu</button>
              </div>
            </section>

            <section className="profile__main__avatar">
              <img src="" alt="" />
              <div className="changeAvatar">
                <input
                  type="file"
                  accept="image/*"
                  // onChange={handleChangeAvatar}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
