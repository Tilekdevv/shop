import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import scss from "./Header.module.scss";
import search from "../../image/Component 2.svg";
import heart from "../../image/Wishlist.svg";
import cart from "../../image/Cart1 with buy.svg";

const Header = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      {/* Top Bar */}
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

      {/* Main Header */}
      <div className="container">
        <div className={scss.header2}>
          {/* Logo */}
          <div className={scss.header_logo}>
            <h1>Exclusive</h1>
          </div>

          {/* Navigation */}
          <div className={scss.header_nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            {!user && <NavLink to="/register">Sign Up</NavLink>}
          </div>

          {/* Icons + Profile */}
          <div className={scss.header_icons}>
            {/* Search */}
            <div style={{ position: "relative" }}>
              <input type="text" placeholder="What are you looking for?" />
              <img src={search} alt="search" />
            </div>

            {/* Wishlist */}
            <NavLink to="/wishlist">
              <img src={heart} alt="wishlist" />
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart">
              <img src={cart} alt="cart" />
            </NavLink>

            {/* Profile Icon - Появляется после логина */}
            {user ? (
              <div style={{ position: "relative", cursor: "pointer" }}>
                <img
                  src={user.photoURL || "https://via.placeholder.com/32"}
                  alt="profile"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #eee",
                  }}
                  onClick={() => setShowDropdown(!showDropdown)}
                />

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div
                    style={{
                      position: "absolute",
                      top: "45px",
                      right: "0",
                      backgroundColor: "white",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      borderRadius: "8px",
                      padding: "10px 0",
                      zIndex: 100,
                      minWidth: "160px",
                    }}
                  >
                    <div style={{ padding: "8px 16px", fontWeight: "500" }}>
                      {user.email}
                    </div>
                    <hr />
                    <button
                      onClick={() => {
                        logout();
                        setShowDropdown(false);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 16px",
                        background: "none",
                        border: "none",
                        color: "#ef4444",
                        cursor: "pointer",
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login">
                <span style={{ fontWeight: "500" }}>Login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
