import { useState, useEffect } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import loadProducts from './util/loadProducts';

export default function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const loadedProducts = await loadProducts();
        setProducts(loadedProducts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Producten worden geladen...</div>;
  }

  if (error) {
    return (
      <div>
        <p>An error has occured: {error.message}</p>
        <p>Please come back later.</p>
      </div>
    );
  }

  const productsExist = products && products.length > 0;

  return productsExist ? (
    <FilterableProductTable products={products} />
  ) : (
    'No products found, come back later!'
  );
}