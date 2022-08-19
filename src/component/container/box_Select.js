import { useState } from 'react';
export default function BoxSelect(props) {
  const { item } = props;
  const [boxSelect, setBoxSelect] = useState('box-select hiden');
  const handleShowBoxSelect = () => {
    setBoxSelect('box-select');
  };
  return (
    <div
      className="shopping_cart-classify Hide-on-mobile Hide-on-table"
      onClick={handleShowBoxSelect}
    >
      <h1 className="shopping_cart-classify-icon">
        Phân Loại Hàng<i className="fa-solid fa-caret-down"></i>
      </h1>
      <div className={boxSelect}>
        {item.tier_variations.map((variations) => (
          <div className="row sm-gutter">
            {variations.name === ' ' ? null : (
              <>
                <div className="l-3 ">
                  <div className="product_cart-content-variation">
                    <h3>{variations.name}</h3>
                  </div>
                </div>
                <div className="l-9 product_cart-content-variation-item">
                  {variations.options.map((option) => (
                    <div className="product_cart-content-variation">
                      <button>{option}</button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
