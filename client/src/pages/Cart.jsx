import React from "react";

const Cart = ({ cartItem, handleIncrease, handleDecrease, handleRemove }) => {
  const grandTotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItem.reduce(
    (total, item)=> total +item.quantity,0
  )
  const handleCheckout = () =>{
    if(cartItem.length > 0) alert('Order placed successfully!')
        else alert('Your cart is empty!')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-100 p-5 rounded-xl border border-blue-200">
            <p className="text-sm font-medium text-blue-900">Total Products</p>
            <h2 className="text-3xl font-bold text-blue-900">{cartItem.length}</h2>
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


      {
      cartItem.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md p-5 border border-slate-200 mb-4 grid  grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr_1fr] items-center  gap-4
          hover:shadow-lg transition-shadow duration-300          "
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {item.name}
          </h2>
          <p className="text-gray-600  font-semibold text-sm">Price: ₹{item.price}</p>
          <p className="text-gray-600 font-medium text-sm">Quantity: {item.quantity}</p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleIncrease(item.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              +
            </button>
            <button
              onClick={() => handleDecrease(item.id)}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              -
            </button>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-200 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
            >
              Remove
            </button>
          </div>
          <p className="text-blue-700 font-bold text-right">Product Total: ₹{item.price * item.quantity}</p>
        </div>
      ))}
      {cartItem.length > 0 && (
        <div className="mt-8 bg-slate-900 rounded-2xl p-6 flex gap-4 justify-between items-center shadow-lg">
          <h2 className="text-xl font-semibold text-white">Grand Total: </h2>
          <h2 className="text-2xl font-bold text-emerald-400">₹{grandTotal}</h2>
          <button onClick={handleCheckout}
           className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 font-semibold">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
