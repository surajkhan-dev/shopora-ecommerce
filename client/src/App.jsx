import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import products from "./data/products";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItem, setCartItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const isAuthPage = currentPage === "login" || currentPage === "register";

  const handleAddToCart = (product) => {
    setCartItem((previousItems) => {
      const isProductExist = previousItems.some(
        (item) => item.id === product.id,
      );

      if (isProductExist) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const handleIncrease = (productId) => {
    setCartItem((previousItems) =>
      previousItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (productId) => {
    setCartItem((previousItems) =>
      previousItems.map((item) =>
        item.id === productId
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item,
      ),
    );
  };

  const handleRemove = (productId) => {
    setCartItem((previousItems) =>
      previousItems.filter((item) => item.id !== productId),
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage("products");
  };

  const handleClearFilters  = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <div>
      {!isAuthPage && (
        <Header
          cartCount={cartItem.reduce((total, item) => total + item.quantity, 0)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}
      {currentPage === "home" ? (
        <Home
          onCategorySelect={handleCategorySelect}
          handleAddToCart={handleAddToCart}
        />
      ) : currentPage === "products" ? (
        <Products
          products={products}
          handleAddToCart={handleAddToCart}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          onClearFilter={handleClearFilters}
        />
      ) : currentPage === "about" ? (
        <About setCurrentPage={setCurrentPage} />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : currentPage === "register" ? (
        <Register setCurrentPage={setCurrentPage} />
      ) : currentPage === "login" ? (
        <Login setCurrentPage={setCurrentPage} />
      ) : (
        <Cart
          cartItem={cartItem}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleRemove={handleRemove}
        />
      )}
      {!isAuthPage && <Footer setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;
