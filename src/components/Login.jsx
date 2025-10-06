import React, { useState } from "react";
import Todo from "./Todo";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function change values of email and password
  const handleChangeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Dummy Login Credentials
  const dummyData = {
    email: "waqas@gmail.com",
    password: "12345",
  };

  // Validation Function
  const handleLogin = (e) => {
    e.preventDefault();

    if (
      formData.email === dummyData.email &&
      formData.password === dummyData.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
      setFormData({
        email: "",
        password: "",
      });
    }
  };
  return (
    <>
      <div className="container">
        {isLoggedIn ? (
          <Todo />
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChangeValue}
              placeholder="enter email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChangeValue}
              placeholder="enter password"
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </>
  );
}
