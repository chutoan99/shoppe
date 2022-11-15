import './footer.css';
import { data_footer, data_footer1, data_footer2, data_footer3 } from '../../utils/data_footer';
import { useState, memo } from 'react';
import IMG from '../../assets/imgs';
import ICON from '../../assets/icons';
function Footer() {
  const [show, setShow] = useState(false);
  return (
    <footer className="footer">
      <div className="grid wide footer__content">
        <div className="grid wide">
          <div className="row boder-b pb-[50px]">
            <div className="l-12 mo-12 mo-12 c-12">
              {data_footer?.map((item) => (
                <>
                  <h2 className="Footer_content-heading">{item?.heading}</h2>
                  <p className="Footer_des">{item?.des}</p>
                </>
              ))}
              {show ? (
                <>
                  <h2 className="Footer_content-heading">{data_footer3?.heading1}</h2>
                  <p className="Footer_des">{data_footer3?.des}</p>
                  {data_footer3?.list?.map((item) => (
                    <li className="Footer_des-list">{item}</li>
                  ))}
                  <p className="Footer_des">{data_footer3?.des2}</p>
                  <h2 className="Footer_content-heading">{data_footer3?.heading2}</h2>
                  <p className="Footer_des">{data_footer3?.des3}</p>
                  <h2 className="Footer_content-heading">{data_footer3?.heading3}</h2>
                  <p className="Footer_des">{data_footer3?.des4}</p>
                  <p className="Footer_des">{data_footer3?.des5}</p>
                </>
              ) : (
                <h2 className="Footer_content-heading click" onClick={() => setShow(true)}>
                  Xem Thêm{ICON.ANGEL_RIGHT}
                </h2>
              )}
            </div>
          </div>
        </div>
        <div className="row pt-[50px]">
          <div className="col l-2-4 mo-3 c-6">
            <h3 className="Footer_heading">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul className="Footer_list">
              {data_footer2?.map((item) => (
                <li className="Footer_list-item" key={item?.value}>
                  <a href={item?.link} className="Footer_item-link">
                    {item?.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col l-2-4 mo-3 c-6">
            <h3 className="Footer_heading">VỀ SHOPEE</h3>
            <ul className="Footer_list">
              {data_footer1?.map((item) => (
                <li className="Footer_list-item" key={item?.id}>
                  <a href={item?.link} className="Footer_item-link">
                    {item?.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col l-2-4 mo-3 c-6 pay-and-ship">
            <div>
              <h3 className="Footer_heading">THANH TOÁN</h3>
              <div className="footer-sale-ship">
                <img src={IMG.PAY1} className="footer-item-sale-ship" alt="pay" />
                <img src={IMG.PAY2} className="footer-item-sale-ship" alt="pay" />
                <img src={IMG.PAY3} className="footer-item-sale-ship" alt="pay" />
                <img src={IMG.PAY4} className="footer-item-sale-ship" alt="pay" />
                <img src={IMG.PAY5} className="footer-item-sale-ship" alt="pay" />
              </div>
            </div>
            <div>
              <h3 className="Footer_heading py-[15px]">ĐƠN VỊ VẬN CHUYỂN</h3>
              <div className="footer-sale-ship">
                <img src={IMG.SHIP1} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP2} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP3} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP4} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP5} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP6} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP7} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP8} className="footer-item-sale-ship" alt="ship" />
                <img src={IMG.SHIP9} className="footer-item-sale-ship" alt="ship" />
              </div>
            </div>
          </div>
          <div className="col l-2-4 mo-3 c-6">
            <h3 className="Footer_heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
            <ul className="Footer_list">
              <li className="Footer_list-item">
                <a href="https://www.facebook.com/ShopeeVN" className="Footer_item-link">
                  <span className="Footer_item-link-icon">{ICON.FACE}</span>
                  Facebook
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://www.instagram.com/Shopee_VN/" className="Footer_item-link">
                  <span className="Footer_item-link-icon">{ICON.INSTAGRAM}</span>
                  Instagram
                </a>
              </li>
              <li className="Footer_list-item">
                <a href="https://www.linkedin.com/company/shopee" className="Footer_item-link">
                  <span className="Footer_item-link-icon">{ICON.LINKEDIN}</span>
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col l-2-4 mo-3 c-6">
            <h3 className="Footer_heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
            <div className="footer-download">
              <a href="# " className="footer-download-link">
                <img src={IMG.QRCODE} className="footer-download-qr" alt="" />
              </a>
              <div className="flex ml-[16px] flex-col justify-around">
                <a href="# " className="footer-download-link">
                  <img src={IMG.GOOGLE} className="h-[16px]" alt="" />
                </a>
                <a href="# " className="footer-download-link">
                  <img src={IMG.APPSTORE} className="h-[16px]" alt="" />
                </a>
                <a href="# " className="footer-download-link">
                  <img src={IMG.GALLERY} className="h-[16px]" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer__bottom">
        <div className="grid wide">
          <p className="Footer__text">@2022 - Bản quyền thuộc về công ty CHU TOAN</p>
        </div>
      </div>
    </footer>
  );
}
export default memo(Footer);
