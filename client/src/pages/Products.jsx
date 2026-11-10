import { useState } from "react";
import ProductGrid from "../components/ProductGrid";

const Products = ({
  handleAddToCart,
  products,
  searchTerm,
  selectedCategory,
  onCategorySelect,
  onClearFilter,
}) => {
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
    // product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  });
  const sortedProducts = [...filteredProducts];

  if (sortOption === "A-Z") {
    sortedProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sortOption === "Z-A") {
    sortedProducts.sort((a, b) => (a.name < b.name ? 1 : -1));
  } else if (sortOption === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
  }

  return (
    <div className="bg-gray-50 px-8 py-16 min-h-screen max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">
          {selectedCategory === "All" ? "All Products " : selectedCategory}
        </h1>
        <span className="text-3xl font-semibold bg-amber-100 px-3 py-1 rounded-full">
          {sortedProducts.length} Products
        </span>
      </div>
      <p className="text-gray-500 mt-2 ">
        Explore our complete collection of products.
      </p>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-8 mb-6">
        <span>Showing {sortedProducts.length} Products</span>
        <div className="flex gap-3">
          <button
            onClick={() => {
              onClearFilter();
              setSortOption("default");
            }}
            className="bg-[#14213d] text-white px-5 py-2 rounded-lg hover:bg-teal-500 transition-colors"
          >
            Clear Filter
          </button>
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => onCategorySelect(e.target.value)}
            className="border rounded-lg px-4 py-2 bg-white outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Beauty">Beauty</option>
            <option value="Sports">Sports</option>
            <option value="Accessories">Accessories</option>
          </select>

          {/* Sorting */}
          <select
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
            }}
            className="border rounded-lg px-4 py-2 bg-white outline-none"
          >
            <option value="default">Default</option>
            <option value="A-Z">A to Z</option>
            <option value="Z-A">Z to A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      {/* ProductGrid */}
      <div className="mt-8">
        {sortedProducts.length > 0 ? (
          <ProductGrid
            products={sortedProducts}
            handleAddToCart={handleAddToCart}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* Search Icon */}
            <div className="bg-gray-200 p-5 rounded-full mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m16 16 4 4" />
              </svg>
            </div>
            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Products Found
            </h2>
            {/* Message */}
            <p className="text-gray-500 mb-6 max-w-md">
              We couldn't find any products matching your search. Try changing
              your search or category.
            </p>

            {/* Clear Filters Button */}
            <button
              onClick={() => {
                onClearFilter();
                setSortOption("default");
              }}
              className="bg-[#14213d] text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
