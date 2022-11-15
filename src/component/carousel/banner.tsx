import { memo } from 'react';

function Banner() {
  return (
    <div>
      <div className="mb-[5px]">
        <img src="https://cf.shopee.vn/file/90e09c7403449b8a591f6d597c699823_xhdpi" alt="Carousel09" className="w-full h-[96%]" />
      </div>
      <div className="mb-[5px]">
        <img src="https://cf.shopee.vn/file/ec5c7317711d328241f9acc768d6d213_xhdpi" alt="Carousel10" className="w-full h-[96%]" />
      </div>
    </div>
  );
}
export default memo(Banner);
