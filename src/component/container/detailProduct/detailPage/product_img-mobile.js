import './product_img-mobile.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function ProductImgMobile() {
  const [items, setItems] = useState([]);
  const params = useParams();
  useEffect(() => {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: `http://localhost:3000/data/item/${params.idItem}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setItems(response.data[0].images);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.idItem]);
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
      <div className="col s-12 c-12 l-12">
        <Slider {...settings}>
          {items.map((image, index) => (
            <div className="" key={index}>
              <img src={`${'https://cf.shopee.vn/file/'}${image}`} alt="item" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
