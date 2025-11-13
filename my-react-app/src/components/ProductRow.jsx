export default function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'white' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td style={{ color: 'green' }}>{product.price}</td>
    </tr>
  );
}