import { useState } from 'react';
function Button(props) {
  const { amount } = props;
  const [amounts, setAmount] = useState(amount);
  const handleReduced = () => {
    if (amounts > 1) {
      setAmount(amounts - 1);
    }
    if (amounts < 1) {
      setAmount(1);
    }
  };
  const handleIncrease = () => {
    setAmount(amounts + 1);
  };
  return (
    <div>
      <button onClick={handleReduced} className="cursor-no-drop">
        <i className="fa-solid fa-minus"></i>
      </button>
      <button>{amounts}</button>
      <button onClick={handleIncrease} className="cursor-no-drop">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default Button;
