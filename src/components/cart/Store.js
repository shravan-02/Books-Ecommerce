import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../database";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import Checkout from "./Checkout";
import AVAILABLE_PRODUCTS from "../availableProducts";

const Store = ({ history }) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [renderPage, setRenderPage] = useState("products");

  useEffect(() => {
    const fetchBookData = () => {
      fetchData("books", setData);
    };
    fetchBookData();
  }, []);

  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((element) => element !== product));
  };

  const checkout = () => {
    setRenderPage("checkout");
  };
 
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <button className="nav__button" onClick={() => navigate("/homepage")}>
            Home
          </button>
          <button
            className="nav__button"
            onClick={() => {
              setRenderPage("products");
            }}
          >
            Books
          </button>
          <button
            className="nav__button"
            onClick={() => {
              setRenderPage("cart");
            }}
          >
            Cart
          </button>
        </nav>
      </header>
      <main className="main">
        {renderPage === "products" && (
          <ProductsList products={data} addToCart={addToCart} />
        )}
        {renderPage === "cart" && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        )}
        {renderPage === "checkout" && <Checkout cart={cart} />}
      </main>
    </>
  );
};

export default Store;
