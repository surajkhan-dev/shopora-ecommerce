const ProductDetails = ({ product, handleAddToCart, setCurrentPage }) => {
  if (!product) {
    return null;
  }

  console.log("Selected Product:", product)

  return (
    <div className="bg-gray-50 min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-contain"
          />
        </div>
        {/* Product Info */}
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-bold  text-gray-900">{product.name}</h1>
          <span className="inline-block w-fit bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">{product.category}</span>
          <p className="text-gray-600 text-base leading-7">{product.description}</p>
          <p className="text-2xl font-bold text-[#14213d]">₹{product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-[#14213d] text-white px-6 py-3 rounded-xl hover:bg-teal-500 transition-colors"
          >
            + Add to Cart
          </button>
          <button
            onClick={() => setCurrentPage("products")}
            className="border border-[#14213d] px-5 py-3 rounded-xl hover:bg-[#14213d] hover:text-white transition-colors"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
