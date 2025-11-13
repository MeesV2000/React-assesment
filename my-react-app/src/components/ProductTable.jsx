import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable({ products, onSort }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => onSort('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => onSort('price')}>
              Price
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}