import './popup.css';
import IMG from '../../assets/imgs';
import ICON from '../../assets/icons';
import OverPlay from '../wrapper/overPlay';
import { useEffect, useState, memo } from 'react';

const Popup = () => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 15000);
  }, []);
  const handelClose = () => {
    setTimeout(() => {
      setPopup(false);
    }, 1500);
  };
  return (
    <>
      {popup ? (
        <OverPlay handelClose={handelClose}>
          <div className="popup-img">
            <img src={IMG.BANNER_IMG} alt="popup" className="w-[70%] h-[100%] relative" id="animation_popup" />
            <span className="popup-close" onClick={handelClose}>
              {ICON.LOSE}
            </span>
          </div>
        </OverPlay>
      ) : null}
    </>
  );
};
export default memo(Popup);
