import Slider from 'react-slick';
import './carousel_pc.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Banner } from '../../../component/index';
import React, { memo } from 'react';

function CarouselPc() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="col l-8 mo-8 c-8 Hide-on-mobile pt-[150px]">
        <Slider {...settings}>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/2e9c3dd632d4463de959355a49f124dc_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/c9739904ffa8ac22228b490c8a37bae2_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/c285369162b483cc5890cbff3ee0f931_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/b787e9ec1e440d6d0d6476538c437a50_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/bb37fa0c31b5ee1a04d2737bfe25e435_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/0e4ec266251b7a0da1dc165288db2fdb_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/0cdca0142feca96cca249d2f6b678ac0_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/688cc4b1ca43d103b829bdf005a34d92_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/f7ea085eb75581b0cb9ba7d5e8cd8385_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
          <div className="w-full h-full">
            <img src="https://cf.shopee.vn/file/1a2cb52bdd1add4857f0cb71b9a97f0b_xxhdpi" alt="Slider" className="w-full h-full" />
          </div>
        </Slider>
      </div>
      <div className="col l-4 m-0-4 c-4 Hide-on-mobile pt-[150px]">
        <Banner />
      </div>
    </>
  );
}
export default memo(CarouselPc);
