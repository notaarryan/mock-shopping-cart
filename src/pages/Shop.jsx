import { useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useEffect, useState } from "react";
import styles from "./styles/Shop.module.css";

function Shop() {
  const [
    setNumberOfCartItems,
    numberOfCartItems,
    idsOfItemsInCart,
    setIdsOfItemsInCart,
    shoppingItems,
    setShoppingItems,
  ] = useOutletContext();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setShoppingItems((oldShoppingItems) => {
          return { ...oldShoppingItems, ...data };
        });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setShoppingItems]);

  if (isLoading) return <section>Loading Data...</section>;
  if (error) return <section>{error.message}</section>;

  return (
    <section className={styles.shopSection}>
      <div className={styles.title}>Shopping Page</div>
      <div className={styles.content}>
        {Object.keys(shoppingItems).map((key) => {
          return (
            <ItemCard
              id={key}
              title={shoppingItems[key].title}
              price={shoppingItems[key].price}
              rating={shoppingItems[key].rating}
              description={shoppingItems[key].description}
              src={shoppingItems[key].image}
              key={key}
              setNumberOfCartItems={setNumberOfCartItems}
              numberOfCartItems={numberOfCartItems}
              idsOfItemsInCart={idsOfItemsInCart}
              setIdsOfItemsInCart={setIdsOfItemsInCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Shop;
