import React from "react";

const Cart = ({ cartItem, handleIncrease, handleDecrease, handleRemove }) => {
  const grandTotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  const handleCheckout = () => {
    if (cartItem.length > 0) alert("Order placed successfully!");
    else alert("Your cart is empty!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-100 p-5 rounded-xl border border-blue-200">
          <p className="text-sm font-medium text-blue-900">Total Products</p>
          <h2 className="text-3xl font-bold text-blue-900">
            {cartItem.length}
          </h2>
        </div>

        <div className="bg-emerald-100 p-5 rounded-xl border border-emerald-200">
          <p className="text-sm font-medium text-emerald-700">Total Items</p>
          <h2 className="text-3xl font-bold text-emerald-900">{totalItems}</h2>
        </div>
      </div>

      {cartItem.length === 0 && (
        <div className="bg-gray-50 rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>
        </div>
      )}

      <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_2fr_1fr] gap-4 px-5 py-3 text-sm font-semibold text-slate-500 uppercase">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Action</p>
        <p className="text-right">Total</p>
      </div>

      {cartItem.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr_1fr] gap-5 md:gap-4 items-center bg-white rounded-2xl border border-slate-200 p-5 mb-4 shadow-sm hover:shadow-md transition duration-200"
        >
          {/* Product Details */}
          <div className="flex flex-row items-center gap-5">
            {/* Product Image */}
            <div className="w-28 h-28 bg-slate-50 rounded-xl p-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Product Info */}
            <div className="flex-1 text-left min-w-0">
              <h2 className="text-lg font-semibold text-slate-800">
                {item.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1">{item.category}</p>
            </div>
          </div>
          <div className="text-base font-semibold text-slate-700 text-left md:text-center">
            ₹{item.price}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleDecrease(item.id)}
              className="w-9 h-9 flex items-center rounded-lg border border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200 font-bold justify-center"
            >
              -
            </button>
            <span className="font-semibold text-slate-800">
              {item.quantity}
            </span>
            <button
              onClick={() => handleIncrease(item.id)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#14213d] text-white hover:bg-[#2dd4bf] hover:text-[#14213d] font-bold transition"
            >
              +
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleRemove(item.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
          <div className="text-right font-bold text-slate-800">
            ₹{item.price * item.quantity}
          </div>
        </div>
      ))}
      {cartItem.length > 0 && (
        <div className="mt-8 bg-slate-900 rounded-2xl p-6 flex gap-4 justify-between items-center shadow-lg">
          <h2 className="text-xl font-semibold text-white">Grand Total: </h2>
          <h2 className="text-2xl font-bold text-emerald-400">₹{grandTotal}</h2>
          <button
            onClick={handleCheckout}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
