import { useState } from 'react';
import usePriceEngine from '../hooks/usePriceEngine'; // make sure this path is correct
import NumberInput from './ui/numberInput';

export default function PriceCalculator({ product }) {
  const [units, setUnits] = useState(0);
  const [cartons, setCartons] = useState(0);

  // Use custom hook instead of direct calculatePrice call
  const result = usePriceEngine(product, units, cartons);

  const discountApplied = result.cartons >= 3;

  return (
    <div className="p-4 space-y-4 border rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold text-blue-700">Price Calculator</h2>

      <div className="flex gap-4">
        <NumberInput value={cartons} onChange={setCartons} placeholder="Cartons" />
        <NumberInput value={units} onChange={setUnits} placeholder="Single Units" />
      </div>

      <div>
        <p>Total Price: <strong>${result.total.toFixed(2)}</strong></p>
        <p>({result.cartons} cartons, {result.singles} singles)</p>
        {discountApplied && (
          <p className="text-green-600 font-semibold mt-2">
             10% discount applied for cartons!
          </p>
        )}
      </div>
    </div>
  );
}
