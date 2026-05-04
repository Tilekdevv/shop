import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Для автоматического перехода

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { signUpWithGoogle, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await register(email, password);
      alert("Кирүү ийгиликтүү! ✅");

      // Автоматический переход на главную страницу
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError(err.message || "Ката кетти. Кайра аракет кылыңыз.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      await signUpWithGoogle();
      alert("Google менен кирүү ийгиликтүү! ✅");

      // Переход на главную
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError("Google менен кирүүдө ката кетти");
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
            Кирүү
          </h2>
          <p style={{ color: "#64748b", marginTop: "8px" }}>
            Аккаунтыңызга кириңиз
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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

          {error && (
            <p style={{ color: "red", fontSize: "14px", marginBottom: "15px" }}>
              {error}
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
            {isLoading ? "Күтө туруңуз..." : "Кирүү"}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "14px",
            backgroundColor: "white",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            width="20"
          />
          Google менен кирүү
        </button>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <NavLink to="/register" style={{ color: "#2563eb" }}>
            Парольду унутуп калдыңызбы?
          </NavLink>
          <NavLink to="/register" style={{ color: "#2563eb" }}>
            Катталуу
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
