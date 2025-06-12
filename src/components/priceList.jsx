import { calculatePrice } from '../utills/pricingLogic';
import PriceListTable from './ui/priceListTable';


export default function PriceList({ product }) {
  const totalRows = 50;
  // Build data array with quantity and price
  const data = Array.from({ length: totalRows }, (_, i) => {
    const qty = i + 1;
    const result = calculatePrice({ product, quantity: qty });
    return { quantity: qty, price: result.total.toFixed(2) };
  });

  const columns = [
    { header: 'Quantity', key: 'quantity' },
    { header: 'Total Price ($)', key: 'price' },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Price List (1–50 Units)</h3>
      <PriceListTable columns={columns} data={data} rowsPerPage={10} />
    </div>
  );
}
