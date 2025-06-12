import { useMemo } from 'react';
import { calculatePrice } from '../utills/pricingLogic';

// this helps to save temp and performance improves because calculations are memoized using useMemo
export default function usePriceEngine(product, units, cartons) {
  const result = useMemo(() => {
    const quantity = cartons * product.unitsPerCarton + Number(units);
    return calculatePrice({ product, quantity }); // cal logic do in other component
  }, [product, units, cartons]);

  return result;
}