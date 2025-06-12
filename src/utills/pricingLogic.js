export function calculatePrice({ product, quantity }) {
  const { unitsPerCarton, cartonPrice } = product;
  const cartons = Math.floor(quantity / unitsPerCarton);
  const singles = quantity % unitsPerCarton;

  let effectiveCartonPrice = cartonPrice;
  if (cartons >= 3) effectiveCartonPrice *= 0.9; //if select 3 or more than 3 given 10% discount

  const singleUnitPrice = (cartonPrice * 1.3) / unitsPerCarton;
  const total = cartons * effectiveCartonPrice + singles * singleUnitPrice;

  return {
    cartons,
    singles,
    total
  };
}
