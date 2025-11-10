import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "./App.module.css";

function App() {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [shoppingItems, setShoppingItems] = useState({});
  const [idsOfItemsInCart, setIdsOfItemsInCart] = useState([]);

  return (
    <>
      <div id={styles.main}>
        <nav>
          <div>Mock Shopping Cart</div>
          <ul>
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/shop">Shop</Link>
            </button>
            <button>
              {numberOfCartItems == 0 ? (
                <Link to="/cart">Cart</Link>
              ) : (
                <Link to="/cart">
                  Cart{" "}
                  <span className={styles.cartItems}>{numberOfCartItems}</span>
                </Link>
              )}
            </button>
          </ul>
        </nav>
        <main>
          <Outlet
            context={[
              setNumberOfCartItems,
              numberOfCartItems,
              idsOfItemsInCart,
              setIdsOfItemsInCart,
              shoppingItems,
              setShoppingItems,
            ]}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
