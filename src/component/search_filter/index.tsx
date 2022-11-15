import ICON from '../../assets/icons';
import { generateStartFilter } from '../../utils/generateStart';
import { memo } from 'react';
import { CategoryGroup } from '../index';
function SearchFilter() {
  return (
    <nav>
      <h3 className="text-[#333] uppercase text-[1rem]  my-[8px] leading-[1.125rem] font-semibold">
        <span className="text-[1rem] mr-[4px]">{ICON.LIST}</span>
        Bộ lọc tìm kiếm
      </h3>
      <CategoryGroup content={['Thiết bị mạng', 'Chuột và bàn phím', 'USB', 'Link kiện máy tính', 'Wifi']} title="Theo Danh Mục" />
      <CategoryGroup content={['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng']} title="Nơi Bán" />
      <CategoryGroup content={['Hoả tốc', 'Nhanh', 'Tiết kiệm']} title="Đơn Vị Vận Chuyển" />
      <CategoryGroup content={['Kingston', 'Sandisk', 'Seagate']} title="Thương Hiệu" />
      <div className="py-[20px]" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="text-[#333] text-[0.938rem] pb-[10px]">Khoảng Giá</div>
        <div className="flex items-center text-[0.875rem] text-[#333] py-[8px] justify-between">
          <input type="number" placeholder="đ TỪ" className="w-[76px] h-[24px] outline-none p-8px" style={{ border: '1px solid #999' }} />
          {ICON.ARROW_RIGHT}
          <input type="number" placeholder="đ ĐẾN" className="w-[76px] h-[24px] outline-none p-8px" style={{ border: '1px solid #999' }} />
        </div>
        <button className="btn btn--primary  w-full bg-[#ee4d2d] text-white hover:bg-[#ee4d2d]">Áp dụng</button>
      </div>
      <CategoryGroup content={['Shoppee', 'Shoppee Mail', 'Shop yêu thích']} title="Loại Shop" />
      <CategoryGroup content={['Mới', 'Đã sử dụng']} title="Tình Trạng" />
      <CategoryGroup content={['Thanh toán khi nhận hàng', 'Chuyển khoản', 'Trả góp 0%']} title="Lựa Chọn Thanh Toán" />
      <div className="py-[20px]" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="text-[#333] text-[0.938rem] pb-[10px]">Đánh Giá</div>
        <div className="flex items-center justify-between text-[0.938rem] w-[70%] py-[8px]">
          <input type="checkbox" className="mr-[12px]" />
          {generateStartFilter(5)}
        </div>
        <div className="flex items-center justify-between text-[0.938rem] w-[70%] py-[8px]">
          <input type="checkbox" className="mr-[12px]" />

          {generateStartFilter(4)}
        </div>
        <div className="flex items-center justify-between text-[0.938rem] w-[70%] py-[8px]">
          <input type="checkbox" className="mr-[12px]" />

          {generateStartFilter(3)}
        </div>
        <div className="flex items-center justify-between text-[0.938rem] w-[70%] py-[8px]">
          <input type="checkbox" className="mr-[12px]" />

          {generateStartFilter(2)}
        </div>
        <div className="flex items-center justify-between text-[0.938rem] w-[70%] py-[8px]">
          <input type="checkbox" className="mr-[12px]" />

          {generateStartFilter(1)}
        </div>
      </div>
      <CategoryGroup content={['Freeship Xtra', 'Hoàn xu Xtra', 'Đang giảm giá', 'Miễn phí vận chuyển', 'Gì cũng rẻ']} title="Dịch Vụ & Khuyến Mãi" />
      <button className="btn btn--primary  w-full my-[20px] bg-[#ee4d2d] text-white hover:bg-[#ee4d2d]">LÀM MỚI</button>
    </nav>
  );
}
export default memo(SearchFilter);
