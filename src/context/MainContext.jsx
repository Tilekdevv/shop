import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const MainContext = ({ children }) => {
  const CHECK = "https://api-crud.elcho.dev/api/v1/81161-6d1d3-aa384/check";
  const API = "https://api-crud.elcho.dev/api/v1/bf75e-e1e08-52091/shop";
  const ORDER_API = "https://api-crud.elcho.dev/api/v1/01101-b2f8d-304cb/cart";
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [check, setCheck] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    readProduct();
  }

  async function readProduct() {
    let { data } = await axios.get(`${API}?per_page=100`);
    setProduct(data.data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  //! order API

  async function addOrder(newOrder) {
    await axios.post(ORDER_API, newOrder);
    readOrder();
  }

  async function readOrder() {
    let { data } = await axios.get(`${ORDER_API}?per_page=100`);
    setOrder(data.data);
  }

  async function deleteOrder(id) {
    await axios.delete(`${ORDER_API}/${id}`);
    readOrder();
  }

  // !CHECK

  async function addCheck(newCheck) {
    await axios.post(CHECK, newCheck);
    readCheck();
  }

  async function readCheck() {
    let { data } = await axios.get(`${CHECK}?per_page=100`);
    setCheck(data.data);
  }

  async function deleteCheck(id) {
    await axios.delete(`${CHECK}/${id}`);
    readCheck();
  }

  const changeCount = (id, type) => {
    const newData = order.map((el) => {
      if (el._id === id) {
        let count = el.count || 1;

        if (type === "inc") {
          count += 1;
        } else if (type === "dec" && count > 1) {
          count -= 1;
        }

        return { ...el, count };
      }
      return el;
    });

    setOrder(newData);
  };

  const values = {
    addProduct,
    product,
    readProduct,
    deleteProduct,

    addOrder,
    readOrder,
    deleteOrder,
    order,
    changeCount,

    readCheck,
    deleteCheck,
    addCheck,
    check,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
