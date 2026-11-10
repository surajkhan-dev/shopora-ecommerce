import React from "react";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-[#14213d] text-white px-6 md:px-16 pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Barnd Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#2dd4bf] mb-4">Shopora</h2>
          <p className="text-gray-300 text-sm leading-7">
            Your destination for simple and enjoyable online shopping.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>

          <div className="flex flex-col items-start gap-3">
            <button
              onClick={() => setCurrentPage("home")}
              className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("products")}
              className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer"
            >
              Shop
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("cart")}
              className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer"
            >
              Cart
            </button>
          </div>
        </div>

        {/* Customer Supports */}
        <div>
          <h2 className="text-lg font-bold mb-4">Customer Support</h2>

          <div className="flex flex-col items-start gap-3">
            <button className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer">
              Contact Us
            </button>
            <button className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer">
              FAQs
            </button>
            <button className="text-gray-300 text-sm hover:text-[#2dd4bf] transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </button>
          </div>
        </div>
        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <p className="text-gray-300 text-sm leading-7">
            Facebook · Instagram · LinkedIn
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center">
        <p className="text-gray-300 text-sm leading-7">
          © {new Date().getFullYear()} Shopora. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Designed & Developed by{" "}
          <span className="text-white font-semibold">Suraj Khan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
