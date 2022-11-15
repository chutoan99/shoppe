import './product_img-mobile.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { memo } from 'react';

interface ProductImgMobile {
  item: any;
}
function ProductImgMobile({ item }: ProductImgMobile) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mobile-carousel-img">
      <div className="s-12 c-12 l-12">
        <Slider {...settings}>
          {item?.images?.map((image: any, index: any) => {
            return (
              <div key={index}>
                <img src={`${process.env.REACT_APP_IMG_URl}${image}`} alt="item" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default memo(ProductImgMobile);
