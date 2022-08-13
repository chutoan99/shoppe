import '../../Style/slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function MobileCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { item } = props;
  return (
    <div className="mobile-carousel-img">
      <div className="col s-12 c-12 l-12">
        <Slider {...settings}>
          {item.images.map((image) => (
            <div className="" key={item.itemid}>
              <img src={`${'https://cf.shopee.vn/file/'}${image}`} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
