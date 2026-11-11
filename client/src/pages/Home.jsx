import heroImage from "../assets/hero-banner.webp";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";


const Home = ({ handleAddToCart,onCategorySelect, handleViewDetails }) => {
  return (
    <>
      <section className="bg-white py-16 px-8">
        <div className="flex items-center justify-between gap-8 max-w-7xl mx-auto flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-sm tracking-widest text-teal-500">
              NEW COLLECTION 2026
            </h3>
            <h1 className="leading-tight text-4xl md:text-5xl font-bold text-[#14213d]">
              Discover Products You'll Love
            </h1>
            <p className="text-gray-600 leading-7 mt-4">
              Explore a world of quality products, modern styles, and everyday
              essentials. Find everything you love in one place and enjoy a
              seamless shopping experience with Shopora.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 ">
              <button className="w-full sm:w-auto text-sm whitespace-nowrap bg-[#14213d] text-white px-6 py-3 rounded-lg hover:bg-[#2dd4bf] transition-colors">
                Shop Now
              </button>
              <button className="w-full sm:w-auto text-sm border border-[#14213d] whitespace-nowrap text-[#14213d] px-5 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                Explore Categories
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="Shopora premium shopping collection"
              className="w-full aspect-[4/3] rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
      <CategorySection  onCategorySelect={onCategorySelect}/>

      <section className="bg-gray-50 px-8 py-16">
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="font-bold text-3xl text-[#14243d]">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">Explore our latest collection</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Product Grid */}

          <ProductGrid 
          products={products}
          handleAddToCart={handleAddToCart}
          handleViewDetails={handleViewDetails}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
