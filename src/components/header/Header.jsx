import React from "react";
import scss from "./Header.module.scss";
import search from "../../image/Component 2.svg";
import heart from "../../image/Wishlist.svg";
import cart from "../../image/Cart1 with buy.svg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <div className={scss.header}>
        <div className={scss.head}>
          <h5>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h5>
          <a href="">ShopNow</a>
        </div>
        <div className={scss.check}>
          <h4>English</h4>
          <input type="checkbox" />
        </div>
      </div>
      <div className="container">
        <div className={scss.header2}>
          <div className={scss.header_logo}>
            <h1>Exclusive</h1>
          </div>
          <div className={scss.header_nav}>
            <NavLink to="/">
              <h3>Home</h3>
            </NavLink>
            <NavLink to="/contact">
              <h3>Contact</h3>
            </NavLink>
            <h4>about</h4>
            <h4>about</h4>
            <h4>about</h4>
            <h4>about</h4>
            <NavLink to="/about">
              <h3>About</h3>
            </NavLink>
            {user ? (
              <div>
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt=""
                  style={{ width: "40px", borderRadius: "50%" }}
                />
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <NavLink to="/signUp">
                <h3>Sign Up</h3>
              </NavLink>
            )}
            {/* <NavLink to="/add">
              <h3>+</h3>
            </NavLink> */}
          </div>
          <div className={scss.header_icons}>
            <input type="text" />
            <img src={search} alt="" />
            <NavLink to="/heart">
              <img src={heart} alt="" />
            </NavLink>
            <NavLink to="/cart">
              <img src={cart} alt="" />
            </NavLink>
          </div>
          {/* {user ? (
            <div>
              <img
                src={user.photoURL}
                alt=""
                style={{ width: "40px", borderRadius: "50%" }}
              />
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <NavLink to="/signUp">
              <h3>Sign Up</h3>
            </NavLink>
          )} */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
