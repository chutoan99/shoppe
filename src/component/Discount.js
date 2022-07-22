import discounts from '../redux/dataDiscount';
function Discount() {
  return (
    <div className="col l-12 m-12 c-12">
      <div className="discounts-main">
        <div className="discounts-list">
          {discounts.map((discount, index) => (
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
export default Discount;
