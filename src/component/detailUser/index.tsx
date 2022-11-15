import ICON from '../../assets/icons';
import IMG from '../../assets/imgs';
import { memo } from 'react';
import { useAppSelector } from '../../hooks/hooks';

function DetailUser() {
  const { photoURL } = useAppSelector<any>((state) => state.user);
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center gap-[20px] pb-[20px]" style={{ borderBottom: '0.0625rem solid #efefef' }}>
          <div className="w-[48px] h-[48px]">
            <img src={photoURL || IMG.USER_IMG} alt="userImg" className="w-full h-full rounded-[50%]" />
          </div>
          <div className="flex flex-col justify-between gap-[8px]">
            <span className="text-[14px] font-semibold">chutoan</span>
            <label className="text-[14px] gap-[5px] flex items-center text-[#888]">{ICON.EDIT}sửa hồ sơ</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] my-[20px]">
        <div className="flex items-center mb-[0.9375rem]" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
          <div className="flex items-center justify-center w-[1.25rem] h-[1.25rem] leading-[1.125rem] text-center rounded-[50%] text-[#fff] flex-shrink-0 mr-[0.625rem]">
            <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" className="w-full h-full" />
          </div>
          <span className="font-normal mr-[0.3125rem]">Tài khoản của tôi</span>
        </div>
        <div className="flex items-center mb-[0.9375rem]" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
          <div className="flex items-center justify-center w-[1.25rem] h-[1.25rem] leading-[1.125rem] text-center rounded-[50%] text-[#fff] flex-shrink-0 mr-[0.625rem]">
            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="" className="w-full h-full" />
          </div>
          <span className="font-normal mr-[0.3125rem]">Đơn Mua</span>
        </div>
        <div className="flex items-center mb-[0.9375rem]" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
          <div className="flex items-center justify-center w-[1.25rem] h-[1.25rem] leading-[1.125rem] text-center rounded-[50%] text-[#fff] flex-shrink-0 mr-[0.625rem]">
            <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" alt="" className="w-full h-full" />
          </div>
          <span className="font-normal mr-[0.3125rem]">Thông Báo</span>
        </div>
        <div className="flex items-center mb-[0.9375rem]" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
          <div className="flex items-center justify-center w-[1.25rem] h-[1.25rem] leading-[1.125rem] text-center rounded-[50%] text-[#fff] flex-shrink-0 mr-[0.625rem]">
            <img src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748" alt="" className="w-full h-full" />
          </div>
          <span className="font-normal mr-[0.3125rem]">Kho Voucher</span>
        </div>
        <div className="flex items-center mb-[0.9375rem]" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
          <div className="flex items-center justify-center w-[1.25rem] h-[1.25rem] leading-[1.125rem] text-center rounded-[50%] text-[#fff] flex-shrink-0 mr-[0.625rem]">
            <img src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="" className="w-full h-full" />
          </div>
          <span className="font-normal mr-[0.3125rem]">Shoppe Xu</span>
        </div>
      </div>
    </div>
  );
}
export default memo(DetailUser);
