import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "../../context/MainContext";
import scss from "./Check.module.scss";

// 🔥 Telegram config
const TOKEN = "8740533703:AAH7IApt9Bw-uPWrQYs3pMG0MAX4Y-sIDUM";
const CHAT_ID = "7298448033";
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const sendToTelegram = async (text) => {
  try {
    const res = await axios.post(URL, {
      chat_id: CHAT_ID,
      parse_mode: "HTML",
      text,
    });

    console.log("Telegram response:", res.data);
  } catch (error) {
    console.log("Telegram error:", error.response?.data || error.message);
  }
};
const Check = () => {
  const { readCheck, check, deleteCheck } = useProduct();

  const [form, setForm] = useState({
    firstName: "",
    company: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    readCheck();
  }, []);

  const normalizedCheck = check.map((el) => el[0]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    try {
      if (!form.firstName || !form.phone) {
        alert("Fill required fields!");
        return;
      }

      let productsText = "";

      if (normalizedCheck.length === 0) {
        productsText = "No products in cart";
      } else {
        normalizedCheck.forEach((item) => {
          productsText += `
📦 Product:
Name: ${item.item.name}
Price: ${item.item.price} сом
-----------------------
`;
        });
      }

      let message = `
🧾 <b>NEW ORDER</b>

👤 <b>Customer:</b>
Name: ${form.firstName}
Company: ${form.company}
Address: ${form.address}
City: ${form.city}
Phone: ${form.phone}
Email: ${form.email}

🛒 <b>Products:</b>
${productsText}
`;

      await sendToTelegram(message);

      alert("✅ Order sent to Telegram!");
    } catch (error) {
      console.log(error);
      alert("❌ Error sending order");
    }
  };

  return (
    <div className="container">
      <div className={scss.theme}>
        <h2>Billing Details</h2>
      </div>

      <div className={scss.main}>
        <div className={scss.inp}>
          <h4>First Name*</h4>
          <input name="firstName" onChange={handleChange} />

          <h4>Company Name</h4>
          <input name="company" onChange={handleChange} />

          <h4>Street Address*</h4>
          <input name="address" onChange={handleChange} />

          <h4>Town/City*</h4>
          <input name="city" onChange={handleChange} />

          <h4>Phone Number*</h4>
          <input name="phone" onChange={handleChange} />

          <h4>Email Address*</h4>
          <input name="email" onChange={handleChange} />

          <button onClick={handleOrder}>Place Order</button>
        </div>

        <div className={scss.product}>
          {normalizedCheck.map((item, idx) => (
            <div className={scss.check} key={idx}>
              <img src={item.item.img} alt="" />
              <h3>{item.item.name}</h3>
              <h3>{item.item.price} сом</h3>

              <button onClick={() => deleteCheck(item._id)}>delete</button>
            </div>
          ))}
        </div>
        <button onClick={handleOrder} className={scss.sendBtn}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Check;
