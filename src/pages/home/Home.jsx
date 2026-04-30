import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/MainContext";
import styles from "./Home.module.scss";
import Taimer from "../../components/taimer/Taimer";

const Home = () => {
  const { product, readProduct, addOrder } = useProduct();

  const [category, setCategory] = useState("all");

  // Слайдер
  const images = [
    "https://www.pockettactics.com/wp-content/sites/pockettactics/2025/08/iphone-17-guide-five-550x309.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfDHcfWXelErC3v059QkM5fyrSKLOVSa1Dg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRge9xQ3ZiS9uGLZk1p_hUF4V30jpJrMUuVTQ&s",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    readProduct();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredProducts =
    category === "all"
      ? product
      : product.filter((item) => item.category === category);

  return (
    <div className="container">
      <div className={styles.home}>
        <div className={styles.home_text}>
          <h5>Woman’s Fashion</h5>
          <h5>Men’s Fashion</h5>
          <h5>Electronics</h5>
          <h5>Electronics</h5>
          <h5>Electronics</h5>
          <h5>Electronics</h5>
          <h5>Electronics</h5>
          <h5>Health & Beauty</h5>
          <h5>Health & Beauty</h5>
        </div>
        <hr />
        <div className={styles.slider}>
          <img src={images[current]} alt="slide" />
        </div>
      </div>

      <Taimer />

      <h2 className={styles.title}>Products</h2>

      <div className={styles.filters}>
        <button onClick={() => setCategory("all")}>Все</button>
        <button onClick={() => setCategory("phones")}>Телефоны</button>
        <button onClick={() => setCategory("laptops")}>Ноутбуки</button>
        <button onClick={() => setCategory("tablets")}>Планшеты</button>
      </div>

      <div className={styles.products}>
        {filteredProducts.map((item) => (
          <div className={styles.card} key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.price} $</p>
            <img src={item.img} alt="" />

            <div className={styles.btnGroup}>
              <button onClick={() => addOrder({ item })}>cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { useProduct } from "../../context/MainContext";
// import "./Home.css";

// const Home = () => {
//   const { product, readProduct, deleteProduct } = useProduct();
//   const [category, setCategory] = useState("all");

//   useEffect(() => {
//     readProduct();
//   }, []);

//   const filteredProducts =
//     category === "all"
//       ? product
//       : product.filter((item) => item.category === category);

//   return (
//     <div className="container">
//       <h2 className="title">Products</h2>

//       <div className="filters">
//         <button onClick={() => setCategory("all")}>Все</button>
//         <button onClick={() => setCategory("phones")}>Телефоны</button>
//         <button onClick={() => setCategory("laptops")}>Ноутбуки</button>
//         <button onClick={() => setCategory("tablets")}>Планшеты</button>
//       </div>

//       <div className="products">
//         {filteredProducts.map((item) => (
//           <div className="card" key={item._id}>
//             <h3>{item.name}</h3>
//             <p>{item.price} $</p>
//             <img src={item.img} alt={item.name} />

//             <div className="btn-group">
//               <button
//                 className="delete-btn"
//                 onClick={() => deleteProduct(item._id)}
//               >
//                 delete
//               </button>
//               <button className="cart-btn">cart to order</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
