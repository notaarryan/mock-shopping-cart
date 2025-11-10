

# 🛒 Mock Shopping Cart

A simple, responsive React.js project built to demonstrate key front-end development skills — including **React state management**, **React Router**, **CSS Modules**, and **API integration**.  

This project simulates a small e-commerce site where users can view products, add them to their cart, and remove them dynamically.

---

## 🌐 Live Demo

🔗 **Try it here:** [https://mock-shopping-cart-rho.vercel.app/](https://mock-shopping-cart-rho.vercel.app/)

---

## 🚀 Features

- 🏠 **Home Page** – Intro to the project.  
- 🛍️ **Shop Page** – Fetches products from a live API (`https://fakestoreapi.com/products`) and displays them as item cards.  
- 🛒 **Cart Page** – Displays selected items, allows item removal, and shows an empty state when the cart is empty.  
- ⚡ **Dynamic Routing** – Implemented with `react-router-dom` v6.  
- 🎨 **CSS Modules** – Scoped, maintainable, and reusable styles.  
- 🧠 **State Management** – Handled through React hooks and context passing via `<Outlet />`.  

---

## 🧩 Tech Stack

- **React.js**  
- **React Router DOM**  
- **CSS Modules**  
- **JavaScript (ES6+)**

---

## 📁 Project Structure

```
src/
│
├── components/
│   └── ItemCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   └── ErrorElement.jsx
│
├── routes/
│   └── routes.jsx
│
├── App.jsx
├── App.module.css
└── Footer.jsx
```

---

## 🧰 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/notaarryan/mock-shopping-cart.git
   cd mock-shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open in your browser at  
   👉 `http://localhost:5173` (Vite default)  
   or `http://localhost:3000` (CRA default)

---

## 🖼️ Screens & Behavior

| Page | Description |
|------|--------------|
| **Home** | Static landing section introducing the project |
| **Shop** | Fetches and displays all items using `ItemCard` components |
| **Cart** | Shows added items, allows item removal, and displays a styled empty-cart message when no items remain |

---

## 🧮 Key Code Concepts

### 🔹 Context Passing
All shared state (`cart items`, `shopping data`, etc.) is passed down using `useOutletContext`:
```js
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
```

### 🔹 Conditional Rendering for Empty Cart
```jsx
{numberOfCartItems === 0 ? (
  <div className={styles.emptyCart}>Your cart is empty 🛒</div>
) : (
  // render ItemCards
)}
```

### 🔹 Dynamic API Fetch
```js
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setShoppingItems(old => ({ ...old, ...data })))
    .catch(setError)
    .finally(() => setIsLoading(false));
}, []);
```

---

## Styling Highlights

- Each page uses its own **CSS Module** (e.g. `Cart.module.css`, `Shop.module.css`)  
- The empty cart message features a modern, minimal design
