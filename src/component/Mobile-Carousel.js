import Slider from 'react-slick';
import '../Style/slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
export default function MobileCarousel(props) {
  const navigate = useNavigate();
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
        <label
          htmlFor="Mobile-search-checkbox"
          class="Header_mobile-search"
          onClick={() => navigate('/')}
        >
          <i class="Header_mobile-search-icon fa-solid fa-left-long"></i>
        </label>
      </div>
    </div>
  );
}
