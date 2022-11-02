export const formatPrice = (value) => {
  return `${(value / 100000).toLocaleString('it-IT')}${'đ'}`;
};
export const formatPriceWithAmount = (value, amount, priceShip) => {
  if (!amount) {
    amount = 1;
  }
  if (!priceShip) {
    priceShip = 0;
  }
  return ((value * amount) / 100000 + priceShip / 100000).toLocaleString('it-IT');
};
