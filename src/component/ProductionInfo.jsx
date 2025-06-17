
const ProductionInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock"
  };
  return (
    <div>
      <p>The product's name is: {product.name}</p>
      <p>The product's price is: ${product.price}</p>
      <p>The product's availability is: {product.availability}</p>
    </div>
  );
};

export default ProductionInfo;