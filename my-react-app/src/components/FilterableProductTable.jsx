import { useState, useMemo } from 'react';
import SearchBar from './searchbar';
import ProductTable from './ProductTable';

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const visibleProducts = useMemo(() => {
    let filteredProducts = [...products];

    filteredProducts = filteredProducts.filter(product => {
      const nameMatches = product.name.toLowerCase().includes(filterText.toLowerCase());
      const stockMatches = !inStockOnly || product.stocked;
      return nameMatches && stockMatches;
    });

    if (sortConfig.key !== null) {
      filteredProducts.sort((a, b) => {
        let valA = a[sortConfig.key];
        let valB = b[sortConfig.key];

        if (sortConfig.key === 'price') {
           valA = parseFloat(valA) || 0;
           valB = parseFloat(valB) || 0;
        }

        if (valA < valB) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (valA > valB) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredProducts;
  }, [products, filterText, inStockOnly, sortConfig]);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={visibleProducts}
        onSort={requestSort}
      />
    </div>
  );
}