import React from "react";

const ProductCard = ({id, name, price, image, handleAddToCart}) => {
  

  function handleClick (){
    handleAddToCart({
      id,
      name,
      price,
      image
    })
  }


  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col
    hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ">
      <div className="bg-gray-50 rounded-xl h-52 flex items-center justify-center overflow-hidden group">
        <img
        src={image}
        alt={name}
        className="w-full h-full  object-contain p-3 transition-transform duration-300 group-hover:scale-105"
      />
      </div>
      <button className="w-full border border-[#14213d] text-[#14213d] py-2.5 rounded-xl hover:bg-gray-100 transition-colors">View details</button>
      <h3 className=" font-semibold text-base text-gray-800 mt-4 line-clamp-2 min-h-12">{name}</h3>
      <p className="text-[#14213d] text-xl font-bold mt-2 mb-4">₹{price}</p>
      <button onClick={handleClick}
      className="w-full mt-auto flex items-center justify-center gap-2 bg-[#14213d] text-white
      font-semibold text-sm py-3 rounded-xl shadow-sm hover:bg-teal-500 hover:shadow-md active:scale-[0.98] transition-all duration-300
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-teal-500 focus-visible:ring-offset-2"><span>+</span>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
