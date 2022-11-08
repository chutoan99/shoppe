import IMG from '../../../assets/imgs';
import discountsMobile from '../../../utils/datadiscountMobile';
import './discount_mobile.css';
function DiscountMobile() {
  return (
    <>
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
        <img src={IMG.SALE} alt="sale"></img>
      </div>
    </>
  );
}
export default DiscountMobile;
