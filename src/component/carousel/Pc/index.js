import Slider from 'react-slick';
import './carousel_pc.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function CarouselPc() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="col l-8 m-8 c-12 Hide-on-mobile" style={{ paddingTop: '150px' }}>
        <Slider {...settings}>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/2e9c3dd632d4463de959355a49f124dc_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/c9739904ffa8ac22228b490c8a37bae2_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/c285369162b483cc5890cbff3ee0f931_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/b787e9ec1e440d6d0d6476538c437a50_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/bb37fa0c31b5ee1a04d2737bfe25e435_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/0e4ec266251b7a0da1dc165288db2fdb_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/0cdca0142feca96cca249d2f6b678ac0_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/688cc4b1ca43d103b829bdf005a34d92_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/f7ea085eb75581b0cb9ba7d5e8cd8385_xxhdpi"
              alt="Slider"
            />
          </div>
          <div className="image-slider-item">
            <img
              src="https://cf.shopee.vn/file/1a2cb52bdd1add4857f0cb71b9a97f0b_xxhdpi"
              alt="Slider"
            />
          </div>
        </Slider>
      </div>
      <div className="col l-4 m-0-4 Hide-on-mobile" style={{ paddingTop: '150px' }}>
        <div className="carousel-item-imgs">
          <div className="carousel-item-img ">
            <img
              src="https://cf.shopee.vn/file/90e09c7403449b8a591f6d597c699823_xhdpi"
              alt="Carousel09"
            />
          </div>
          <div className="carousel-item-img ">
            <img
              src="https://cf.shopee.vn/file/ec5c7317711d328241f9acc768d6d213_xhdpi"
              alt="Carousel10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
