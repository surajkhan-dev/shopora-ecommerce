const About = ({ setCurrentPage }) => {
 

  return (
    <div className="bg-gray-50 text-center px-6 md:px-16 py-16 ">
      <header>
        <h1 className="text-4xl font-bold text-[#14213d]">About Shopora</h1>
        <p className="text-gray-600  max-w-3xl mx-auto mt-4">
          Welcome to Shopora, your one-stop destination for a simple and
          enjoyable online shopping experience. We bring together quality
          products across different categories to make your everyday shopping
          easier and more convenient.
        </p>
      </header>
      <div>
        <h2 className="text-2xl font-bold text-[#14213d] mt-12">Who We Are</h2>
        <p className="text-gray-600  max-w-3xl mx-auto mt-4">
          Shopora is a modern e-commerce platform designed to make online
          shopping simple, convenient, and accessible. Our goal is to help
          customers discover products they love through a smooth and
          user-friendly shopping experience.
        </p>
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#14213d]">Our Mission</h2>
          <p className="text-gray-600 mt-4 leading-7">
            To make online shopping simple, convenient, and enjoyable for
            everyone.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#14213d]">Our Vision</h2>
          <p className="text-gray-600 mt-4 leading-7">
            To build a trusted shopping platform that connects customers with
            products they love.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-[#14213d]">
          Why Choose Shopora?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#14213d]">Easy Shopping</h3>
            <p className="text-gray-600 mt-4 leading-7">
              Enjoy a simple and convenient shopping experience.
            </p>{" "}
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#14213d]">
              Quality Products
            </h3>
            <p className="text-gray-600 mt-4 leading-7">
              {" "}
              Explore carefully selected products across different categories.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#14213d]">Customer First</h3>
            <p className="text-gray-600 mt-4 leading-7">
              {" "}
              We focus on making every shopping experience enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-[#14213d] rounded-2xl px-6 py-12">
        <h2 className="text-3xl font-bold text-white">
          Start Shopping with Shopora
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Discover products you'll love and enjoy a simple shopping experience
          with Shopora.
        </p>
        <button
          onClick={() => setCurrentPage("products")}
          className="mt-6 bg-[#2dd4bf] text-[#14213d] font-semibold px-8 py-3 rounded-lg  hover:bg-teal-300 transition"
        >
          Explore Products →
        </button>
      </section>
    </div>
  );
};

export default About;
