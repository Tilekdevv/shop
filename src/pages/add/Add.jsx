import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/MainContext";
import styles from "./Add.module.scss";

const Add = () => {
  const { addProduct } = useProduct();

  const { product, readProduct, deleteProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = () => {
    if (!name || !price || !img || !category) {
      alert("Заполните все поля");
      return;
    }

    const obj = {
      name,
      price,
      img,
      category,
      id: Date.now(),
    };

    addProduct(obj);

    setName("");
    setPrice("");
    setImg("");
    setCategory("");
  };

  const filteredProducts =
    category === "all"
      ? product
      : product.filter((item) => item.category === category);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Product</h2>

      <div className={styles.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="price"
        />

        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="img url"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Выбери категорию</option>
          <option value="phones">Телефоны</option>
          <option value="laptops">Ноутбуки</option>
          <option value="tablets">Планшеты</option>
        </select>

        <button onClick={handleClick}>Create</button>
      </div>

      <br />
      <br />

      <hr />
      <br />
      <br />
      <br />

      <div className={styles.filters}>
        <button onClick={() => setCategory("all")}>Все</button>
        <button onClick={() => setCategory("phones")}>Телефоны</button>
        <button onClick={() => setCategory("laptops")}>Ноутбуки</button>
        <button onClick={() => setCategory("tablets")}>Планшеты</button>
      </div>

      <div>
        {filteredProducts.map((item) => (
          <div className={styles.card} key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.price} $</p>
            <img src={item.img} alt="" />

            <div className={styles.btnGroup}>
              <button onClick={() => deleteProduct(item._id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
