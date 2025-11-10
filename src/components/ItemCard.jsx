import styles from "./styles/ItemCard.module.css";

function ItemCard({
  id,
  title = "",
  price = 0,
  src = "",
  rating = { rate: 0, count: 0 },
  description = "",
  setNumberOfCartItems,
  numberOfCartItems,
  idsOfItemsInCart,
  setIdsOfItemsInCart,
}) {
  const handleAddClick = (id) => {
    if (!idsOfItemsInCart.includes(id)) {
      setNumberOfCartItems((oldNumber) => oldNumber + 1);
      setIdsOfItemsInCart((oldIds) => {
        return [...oldIds, id];
      });
    }
  };
  const handleRemoveClick = (id) => {
    if (numberOfCartItems == 0) {
      alert("Cart is empty");
    } else if (idsOfItemsInCart.includes(id)) {
      setNumberOfCartItems((oldNumber) => oldNumber - 1);
      setIdsOfItemsInCart((oldIds) => oldIds.filter((itemId) => itemId !== id));
    }
  };

  return (
    <div className={styles.card} id={id}>
      <div className={styles.imageContainer}>
        <img
          className={styles.itemImage}
          src={src}
          alt={"Image of " + description}
        />
      </div>
      <div>{title}</div>
      <div className={styles.dataContainer}>
        <div>{description}</div>
        <div>{price}</div>
        <div>
          {rating.rate}, {rating.count}
        </div>
      </div>
      <button onClick={() => handleAddClick(id)}>Add item to cart</button>
      <button onClick={() => handleRemoveClick(id)}>
        Remove item from cart
      </button>
    </div>
  );
}

export default ItemCard;
