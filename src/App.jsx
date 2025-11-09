import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router";
import styles from "./App.module.css";

function App() {
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
              <Link to="/cart">Cart</Link>
            </button>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
