import './discount_pc.css';
import discountsPC from '../../../redux/dataDiscountPc';
function DiscountPc() {
  return (
    <div className="col l-12 mo-12 c-12 Hide-on-mobile">
      <div className="discounts-main">
        <div className="discounts-list">
          {discountsPC.map((discount, index) => (
            <div className="discounts-item" key={index}>
              <img src={discount.src} className="discounts-image" alt="{discount.title}" />
              <div className="discounts-name">
                <h4>{discount.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DiscountPc;
