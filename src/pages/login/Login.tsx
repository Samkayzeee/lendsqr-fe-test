import "./Login.scss";
import Logo from "/images/logo/lendsqr_logo.png";
import Illustration from "/images/Login/Login_illustration.svg";



import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (value: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }
    setError("");
    console.log("Logged in", { email, password });
  };

  return (
    <main className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <div className="logo">
          <img src={Logo} alt="Lendsqr Logo" />
        </div>
        <div className="illustration">
            <img src={Illustration} alt="Login_Illustration_Image" />
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className={!validatePassword(password) && password ? "error" : ""}
              />
              <button
                type="submit"
                className="toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="forgot-password">
            <a href="#">FORGOT PASSWORD?</a>
          </div>

          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
