export default async function loadProducts()
{
  const response = await fetch('/public/products.json');
  
  if (200 === response.status) {
    const data = await response.json();

    return data;
  }

  throw new Error('Unable to fetch products');
}