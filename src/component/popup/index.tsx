import './popup.css';
import { useEffect, useState } from 'react';
import IMG from '../../assets/imgs';
import ICON from '../../assets/icons';
import OverPlay from '../wrapper/overPlay';

const Popup = () => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 6000);
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
            <img src={IMG.BANNER_IMG} alt="popup" />
            <span className="popup-close" onClick={handelClose}>
              {ICON.LOSE}
            </span>
          </div>
        </OverPlay>
      ) : null}
    </>
  );
};
export default Popup;
