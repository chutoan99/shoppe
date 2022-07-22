import Slider from 'react-slick';
import '../Style/slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
let Carousel01 = require('../Img/carousel01.jpg');
let Carousel02 = require('../Img/carousel02.png');
let Carousel03 = require('../Img/carousel03.png');
let Carousel04 = require('../Img/carousel04.png');
let Carousel05 = require('../Img/carousel05.png');
let Carousel06 = require('../Img/carousel06.png');
let Carousel07 = require('../Img/carousel07.png');
let Carousel08 = require('../Img/carousel08.png');
let Carousel09 = require('../Img/carousel09.png');
let Carousel10 = require('../Img/carousel10.png');
export default function Carousel() {
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
      <div className="col l-8 m-8 c-12">
        <Slider {...settings}>
          <div class="image-slider-item">
            <img src={Carousel01} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel02} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel03} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel04} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel05} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel06} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel07} alt="" />
          </div>
          <div class="image-slider-item">
            <img src={Carousel08} alt="" />
          </div>
        </Slider>
      </div>
      <div className="col l-4 m-0-4 Hide-on-mobile">
        <div className="carousel-item-imgs">
          <div className="carousel-item-img ">
            <img src={Carousel09} alt="Carousel09" />
          </div>
          <div className="carousel-item-img ">
            <img src={Carousel10} alt="Carousel10" />
          </div>
        </div>
      </div>
    </>
  );
}
