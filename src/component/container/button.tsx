import { useState } from 'react';
import ICON from '../../assets/icons';
import React, { memo } from 'react';

interface Button {
  amount: number;
}

function Button({ amount }: Button) {
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
        {ICON.MINUS}
      </button>
      <button>{amounts}</button>
      <button onClick={handleIncrease} className="cursor-no-drop">
        {ICON.PLUS}
      </button>
    </div>
  );
}
export default memo(Button);
