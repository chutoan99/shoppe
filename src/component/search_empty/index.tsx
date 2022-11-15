import IMG from '../../assets/imgs';
import { memo } from 'react';

function SearchEmpty() {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <img src={IMG.SEARCH_IMG} alt="Search" className="w-[20%]" />
      </div>
      <h2 className="flex justify-center text-[1.125rem]" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
        Không tìm thấy kết quả nào
      </h2>
      <h3 className="flex justify-center items-center mt-[10px] text-[1rem]" style={{ color: ' rgba(0, 0, 0, 0.54)' }}>
        Hãy thử sử dụng các từ khóa chung chung hơn thấy kết quả nào
      </h3>
      <h3 className="text-center mb-[20px] uppercase text-[1.125rem] text-[#222] mt-[80px] font-medium">bạn cũng có thể thích</h3>
    </div>
  );
}
export default memo(SearchEmpty);
