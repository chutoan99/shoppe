import { useEffect, useState } from 'react';
import './banner.css';
let bannerImg = require('../../Img/banner.png');
function Banner() {
  const [banner, setBanner] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBanner(true);
    }, 3000);
  }, []);
  const handelCloseBanner = () => {
    setTimeout(() => {
      setBanner(false);
    }, 2000);
  };
  return (
    <>
      {banner ? (
        <div className="banner-overplay" onClick={handelCloseBanner}>
          <div className="banner">
            <div className="banner-img">
              <img src={bannerImg} alt="banner"></img>
              <span className="banner-close" onClick={handelCloseBanner}>
                <i class="fa-solid fa-x"></i>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Banner;
