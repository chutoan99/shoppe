import './banner.css';
import { useEffect, useState } from 'react';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';
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
              <img src={IMG.BANNER_IMG} alt="banner"></img>
              <span className="banner-close" onClick={handelCloseBanner}>
                {ICON.LOSE}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Banner;
