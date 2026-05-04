import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate(); // Для перехода на главную

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Бардык талааларды толтуруңуз");
      return;
    }

    if (password !== confirmPassword) {
      setError("Парольдор дал келбей жатат");
      return;
    }

    if (password.length < 6) {
      setError("Пароль кеминде 6 белгиден турушу керек");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const user = await register(email, password);
      console.log("Жаңы user:", user);

      setSuccess(true);
      alert("Ийгиликтүү катталдыңыз! ✅");

      // Автоматически переходим на главную страницу
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      setError(err.message || "Катталууда ката кетти. Кайра аракет кылыңыз.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          padding: "40px 30px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0" }}>
            Катталуу
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>
            Жаңы аккаунт түзүңүз
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Пароль
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  fontSize: "16px",
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Парольду кайталаңыз
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                fontSize: "16px",
              }}
              required
            />
          </div>

          {error && (
            <p
              style={{
                color: "#ef4444",
                fontSize: "14px",
                marginBottom: "15px",
                backgroundColor: "#fee2e2",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              {error}
            </p>
          )}

          {success && (
            <p
              style={{
                color: "#10b981",
                fontSize: "14px",
                marginBottom: "15px",
                backgroundColor: "#d1fae5",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              Каттоо ийгиликтүү өттү! ✅ Башкы бетке өтүп жатасыз...
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? "Күтө туруңуз..." : "Катталуу"}
          </button>
        </form>

        <div
          style={{
            marginTop: "25px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Аккаунтыңыз барбы?{" "}
          <NavLink
            to="/login"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Кирүү
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
