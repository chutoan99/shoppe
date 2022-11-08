export const formatPrice = (value: number, amount?: number, priceShip?: number) => {
  if (!amount) {
    amount = 1;
  }
  if (!priceShip) {
    priceShip = 0;
  }
  return ((value * amount) / 100000 + priceShip / 100000).toLocaleString('it-IT');
};
