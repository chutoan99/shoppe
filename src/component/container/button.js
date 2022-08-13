import { useState } from 'react';
function Button(props) {
  console.log(props);
  const { amount, setAmounts } = props;
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
    console.log('amounts +', amounts);
    console.log('newAmounts +', amounts);
  };
  return (
    <div>
      <button onClick={handleReduced}>
        <i class="fa-solid fa-minus"></i>
      </button>
      <button>{amounts}</button>
      <button onClick={handleIncrease}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default Button;
