import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOption } from '../../redux/cartSlice';
import ICON from '../../assets/icont';
export default function BoxSelect({ item, index }) {
  const dispatch = useDispatch();
  const [boxSelect, setBoxSelect] = useState(true);
  const [options, setOptions] = useState(undefined);

  const handleBoxSelect = () => {
    setBoxSelect(!boxSelect);
  };
  const handelChangeOptions = (option) => {
    console.log('chutoan');
    setOptions(option);
    if (option !== undefined) {
      dispatch(
        updateOption({
          option: option,
          index: index,
        })
      );
    }
  };
  return (
    <div
      className="shopping_cart-classify Hide-on-mobile Hide-on-table"
      onClick={(index) => handleBoxSelect(index)}
    >
      <h1 className="shopping_cart-classify-icon">Phân Loại Hàng{ICON.CARET_DOWN}</h1>
      {boxSelect ? null : (
        <div className="box-select">
          {item.tier_variations.map((variations, index) => (
            <div className="row sm-gutter" key={index}>
              {variations.name === ' ' ? null : (
                <>
                  <div className="l-3 ">
                    <div className="product_cart-content-variation">
                      <h3>{variations.name}</h3>
                    </div>
                  </div>
                  <div className="l-9 product_cart-content-variation-item">
                    {variations.options.map((option, index) => (
                      <div className="product_cart-content-variation" key={index}>
                        <button
                          className={`${options === option ? 'product_cart-variation-active' : ''}`}
                          onClick={() => handelChangeOptions(option)}
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div>{item.newOption}</div>
    </div>
  );
}
