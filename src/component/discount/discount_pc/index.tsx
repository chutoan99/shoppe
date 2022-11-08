import './discount_pc.css';
import discountsPC from '../../../utils/dataDiscountPc';
function DiscountPc() {
  return (
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
  );
}
export default DiscountPc;
