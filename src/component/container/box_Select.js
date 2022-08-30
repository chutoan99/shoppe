import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateOptions } from '../../redux/action';
export default function BoxSelect(props) {
  const { item, index } = props;
  const [boxSelect, setBoxSelect] = useState('box-select hidden');
  const handleShowBoxSelect = (index) => {
    setBoxSelect('box-select');
  };
  const handleCloseBoxSelect = () => {
    setBoxSelect('box-select hidden');
  };
  return (
    <div
      className="shopping_cart-classify Hide-on-mobile Hide-on-table"
      onClick={(index) => handleShowBoxSelect(index)}
      onDoubleClick={handleCloseBoxSelect}
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
                  {variations.options.map((option, index) => (
                    <div className="product_cart-content-variation" key={index}>
                      <Option option={option} item={item} index={index} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div>{item.newOption}</div>
    </div>
  );
}
export function Option(props) {
  const { option, index } = props;
  const [options, setOptions] = useState('');
  const dispatch = useDispatch();
  const handleSetOptions = (option, index) => {
    setOptions('product_cart-variation-active');
    if (options !== '') {
      setOptions('');
    }
    dispatch(
      UpdateOptions({
        option: option,
        index: index,
      })
    );
  };
  return (
    <button className={options} onClick={() => handleSetOptions(option, index)}>
      {option}
    </button>
  );
}
