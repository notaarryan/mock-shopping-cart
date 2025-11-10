import { useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import styles from "./styles/Cart.module.css";

function Cart() {
  const [
    setNumberOfCartItems,
    numberOfCartItems,
    idsOfItemsInCart,
    setIdsOfItemsInCart,
    shoppingItems,
  ] = useOutletContext();

  return (
    <section className={styles.shopSection}>
      <div className={styles.title}>Your Cart</div>
      <div className={styles.content}>
        {numberOfCartItems === 0 ? (
          <div className={styles.emptyCart}>Your cart is empty 🛒</div>
        ) : (
          Object.keys(shoppingItems)
            .filter((key) => idsOfItemsInCart.includes(key))
            .map((key) => (
              <ItemCard
                id={key}
                key={key}
                title={shoppingItems[key].title}
                price={shoppingItems[key].price}
                rating={shoppingItems[key].rating}
                description={shoppingItems[key].description}
                src={shoppingItems[key].image}
                setNumberOfCartItems={setNumberOfCartItems}
                numberOfCartItems={numberOfCartItems}
                idsOfItemsInCart={idsOfItemsInCart}
                setIdsOfItemsInCart={setIdsOfItemsInCart}
              />
            ))
        )}
      </div>
    </section>
  );
}

export default Cart;
