import { useState } from "react";

const ProductDetails = ({ product, handleAddToCart, setCurrentPage }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((previous) => previous + 1);
  };
  const decrease = () => {
    setQuantity((previous) => (previous > 1 ? previous - 1 : 1));
  };
  if (!product) {
    return null;
  }

  return (
    <div className="bg-gray-50 min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-contain md:h-[450px]"
          />
        </div>
        {/* Product Info */}
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-bold  text-gray-900">{product.name}</h1>
          <span className="inline-block w-fit bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            {product.category}
          </span>
          <p className="text-gray-600 text-base leading-7">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-[#14213d]">₹{product.price}</p>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              Quantity
            </p>
            <div className="flex items-center border border-gray-300 rounded-xl w-fit overflow-hidden">
              <button
                onClick={decrease}
                disabled={quantity === 1}
                className="w-11 h-11 hover:bg-gray-100 disabled:opacity-40 transition-colors"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                onClick={increase}
                className="w-11 h-11 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => handleAddToCart(product, quantity)}
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
