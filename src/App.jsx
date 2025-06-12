import { useEffect, useState } from 'react';
import PriceCalculator from './components/PriceCalculator';
import PriceList from './components/PriceList';
import ProductSelector from './components/ProductSelector';

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //import prodcut from json file (dummy data)
useEffect(() => {
  fetch('/data/products.json')
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then((data) => {
      setProducts(data);
      setSelectedProduct(data[0]);
    })
    .catch((error) => {
      console.error('Failed to load products:', error);
      setProducts([]);
      setSelectedProduct(null); 
    });
}, []);


  if (!selectedProduct) return <div className="text-center mt-20">Loading...</div>;

  return (
    <main className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
        Store Pricing Dashboard
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Selection */}
        <div className="lg:w-1/3 space-y-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Select Product</h2>
          <ProductSelector
            products={products}
            selected={selectedProduct}
            onChange={setSelectedProduct}
          />
          <div className="mb-4 text-center bg-white p-4 rounded shadow">
  <h2 className="text-lg font-semibold text-gray-700">{selectedProduct.name}</h2>
  <p className="text-sm text-gray-600">
    <strong>Units per Carton:</strong> {selectedProduct.unitsPerCarton}
  </p>
  <p className="text-sm text-gray-600">
    <strong>Price per Carton:</strong> ${selectedProduct.cartonPrice}
  </p>
</div>

   <PriceCalculator product={selectedProduct} />
        </div>

        

        {/* Right side: Price List & Calculator */}
        <div className="lg:w-2/3 space-y-10">
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedProduct.name} Price List (1–50 units)
            </h2>
            <PriceList product={selectedProduct} />
          </section>

       
        </div>
      </div>
    </main>
  );
}
