const Header = ({ cartCount, setCurrentPage, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-wrap gap-4 md:flex-nowrap justify-between items-center w-full px-8 py-4 bg-white border-b border-gray-100 shadow-sm ">
      <button 
      onClick={()=> setCurrentPage("home")}
      className="text-[#14213d] text-2xl font-bold cursor-pointer tracking-tight">
        Shop<span className="text-[#2dd4bf]">ora</span>
      </button>
      {/* SearchBar */}
      <div className="flex-1 min-w-[200px] relative flex gap-2 ">
        <div className="relative flex-1">
          <input

          
          type="text"
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          placeholder="Search for Products..."
          className="rounded-lg border w-full px-4 py-2 pr-10"
        />

        {searchTerm && (
          <button
          onClick={() => setSearchTerm("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
          >x</button>
        )}
        </div>
        <button className="rounded bg-[#14213d] text-white px-4 py-2 hover:bg-[#2dd4bf]">
          Search
        </button>
      </div>

      <nav className="flex gap-6 text-[#14213d] ">
        <a
          onClick={() => setCurrentPage("home")}
          className="hover:text-[#2dd4bf] transition-colors duration-200"
        >
          Home
        </a>
        <button
          onClick={()=> setCurrentPage("products")}
          className="hover:text-[#2dd4bf] transition-colors duration-200"
        >
          Shop
        </button>
        <button

          onClick={()=> setCurrentPage("category")}
          className="hover:text-[#2dd4bf] transition-colors duration-200"
        >
          Categories
        </button>
        <button
          onClick={()=> setCurrentPage("about")}
          className="hover:text-[#2dd4bf] transition-colors duration-200"
        >
          About
        </button>
      </nav>

      {/* Cart */}

      <div className="flex items-center gap-2">
        <a
          onClick={()=> setCurrentPage("cart")}
          className="text-[#14213d] hover:text-[#2dd4bf] transition-colors cursor-pointer"
        >
          Cart
          <span className="bg-[#2dd4bf] text-white rounded-full text-xs px-2 py-1">
            {cartCount}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
