import discountsMobile from '../../../../redux/datadiscountMobile';
import './discount_mobile.css';
let sale = require('../../../../Img/sale.jpg');
function DiscountMobile() {
  return (
    <div className="col l-12 m-12 c-12 show-on-mobile display-none">
      <div className="discounts_main-mobile">
        <div className="discounts_list-mobile">
          {discountsMobile.map((discount, index) => (
            <div className="discounts_item-mobile" key={index}>
              <img src={discount.src} className="discounts_image-mobile" alt="{discount.title}" />
              <div className="discounts_name-mobile">
                <h4>{discount.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sale">
        <img src={sale} alt="sale"></img>
      </div>
    </div>
  );
}
export default DiscountMobile;
