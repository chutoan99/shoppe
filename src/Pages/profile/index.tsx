import { useState, memo } from 'react';
import { DetailUser, Province, Date, UpdateAvatar } from '../../component/index';
import { Footer, Header } from '../../containers/index';
import { useAppSelector } from '../../hooks/hooks';

function Profile() {
  const { displayName, email } = useAppSelector<any>((state) => state.user.data);
  const [avatar, setAvatar] = useState<any>('blob:http://localhost:3000/0bc8bd1e-f41d-4854-977f-1d6bc476988f');
  const onImageChange = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <Header />
      <div className="bg-[#f5f5f5]">
        <div className="grid wide">
          <div className="row pt-[150px] pb-[100px]">
            <div className="col-lg-2">
              <DetailUser />
            </div>
            <div className="col-lg-10 bg-white">
              <div className="p-[30px]">
                <section className="flex flex-col items-start gap-[15px] pb-[20px]" style={{ borderBottom: '.0625rem solid #efefef' }}>
                  <span style={{ textTransform: 'capitalize', fontSize: '25px' }}>Hồ sơ của tôi</span>
                  <span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
                </section>
                <div className="flex mt-[30px] gap-[30px] w-full">
                  <div className="flex-1 w-full h-full px-[30px]">
                    <section className="">
                      <div className="form">
                        <div className="gap-[10px] flex flex-col mb-[20px]">
                          <h1>Tên Đăng Nhập: {displayName}</h1>
                          <h1>SĐT:</h1>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                          <div className="flex w-full justify-center items-center gap-[15px]">
                            <span className="w-[130px] text-[1.2rem] text-end">Tên:</span>
                            <input placeholder="Tên" className="w-full h-[2.5rem]  pl-[10px] rounded-[5px] outline-none" type="text" style={{ border: '1px solid #ccc' }} />
                          </div>
                          <div className="flex w-full justify-center items-center gap-[15px]">
                            <span className="w-[130px] text-[1.2rem] text-end">Email:</span>
                            <input placeholder={email} className="w-full h-[2.5rem] pl-[10px] rounded-[5px] outline-none" type="text" style={{ border: '1px solid #ccc' }} />
                          </div>
                          <div className="flex w-full justify-center items-center gap-[15px]">
                            <span className="w-[130px] text-[1.2rem] text-end">Giới Tính:</span>
                            <div className="flex items-center gap-[20px] w-full">
                              <div className="flex items-center gap-[20px] h-full">
                                {['Nam', 'Nữ', 'khác'].map((item: any, index: number) => (
                                  <div className="flex items-center gap-[5px]" key={index}>
                                    <div className="rounded-[50%] w-[18px] h-[18px] flex items-center justify-center" style={{ border: '2px solid rgba(0, 0, 0, 0.26)' }}>
                                      <div className="bg-[#ee4d2d] w-[8px] h-[8px] rounded-[50%]"></div>
                                    </div>
                                    <div>
                                      <div>{item}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Province />
                        <Date />
                        <button className="block w-[100px] h-[50px] rounded-[12px] cursor-pointer text-[1.25rem] btn btn--prinary">Lưu</button>
                      </div>
                    </section>
                  </div>
                  <UpdateAvatar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default memo(Profile);
