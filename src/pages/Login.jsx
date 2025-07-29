// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const allowedDomains = ["rmkec.ac.in", "rmkcet.ac.in", "rmkschool.edu.in"];
    const emailDomain = email.split("@")[1];

    if (!allowedDomains.includes(emailDomain)) {
      alert("Only RMK institution students can access.");
      return;
    }

    if (password === "1234") {
      sessionStorage.setItem("rmk_logged_in", "true");
      navigate("/"); // go to home
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="login-page" style={{  maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <div className="login">
        <h2>Login - RMK Student Access</h2>
        <form onSubmit={handleLogin}>
          <input
          className="form-control"
            type="email"
            placeholder="RMK Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br /><br />
          <input
          className="form-control"
            type="password"
            placeholder="Password (try 1234)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br />
          <button className="btn btn-success" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
