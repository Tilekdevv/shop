import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signUpWithGoogle, register } = useAuth();

  // async function handleReducer() {
  //   try {
  //     await register(email, password);
  //   } catch (error) {
  //     console.log(error.message + "error");
  //   }
  // }

  async function handleReducer() {
    try {
      await register(email, password);

      alert("Ийгиликтүү катталдыңыз ✅");

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        value={email}
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        value={password}
        placeholder="password"
      />
      <button onClick={handleReducer}>click</button>
      <button onClick={() => signUpWithGoogle()}>google</button>
      <NavLink to="/register">
        <h5>забыли пароль</h5>
      </NavLink>
    </div>
  );
};

export default Login;
