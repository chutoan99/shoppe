import './carousel_mobile.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { memo } from 'react';

function CarouselMobile() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="l-8 mo-8 c-12 display-none show-on-mobile transform">
        <Slider {...settings}>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/e0c270a915a5af34f3b42c0c90504a3d" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/113ec3e7a1faca13edde2d81897ed618" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/cec29525fe5e9670420f358f1728d4f0" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/3e4ec0320508f29f86601edc7b5af9ce" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/f55976ef6b4612eca0ed06e29abd3c92" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/3e4ec0320508f29f86601edc7b5af9ce" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/074307f3488053cec1dcecef0fc6d448" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/e3102003c55f914c8a60cd1e8f5f34d6" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/31442202394153966a654e44faaffddb" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/c0f26f855e56c259f8f4e70e66c3a28f" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/d2a3a7e1b81d580f1d0377931774ae7c" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/d81cd490c4296d57969d4eb97e9e73e2" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/9c2e8255a097b22b76a44b9e579a15b8" alt="Slider" className="w-full h-full" />
          </div>
        </Slider>
      </div>
    </>
  );
}
export default memo(CarouselMobile);
