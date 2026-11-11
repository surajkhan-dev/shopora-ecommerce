import ProductCard from "./ProductCard";

const ProductGrid = ({ products, handleAddToCart, handleViewDetails }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            handleAddToCart={handleAddToCart}
            handleViewDetails = {handleViewDetails}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
