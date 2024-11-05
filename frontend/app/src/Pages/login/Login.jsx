import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin.hook";

const Login = () => {
  const { login, success } = useLogin();
  const navigate = useNavigate();

  const [Input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (success) {
      navigate("/home"); // Navigate to home if login is successful
    }
  }, [success, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(Input); // Call login function from the hook
  };

  return (
    <div className="flex flex-col justify-center gap-5 items-center w-screen h-screen">
      <h1 className="text-xl font-bold tracking-widest text-sky-700">
        Login User
      </h1>
      <label className="form-control w-full max-w-xs mb-3">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={Input.username}
          onChange={handleInput}
          className="input input-bordered input-primary w-full max-w-xs focus:outline"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={Input.password}
          onChange={handleInput}
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <div className="label text-sky-600">
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </label>
      <button
        onClick={handleSubmit}
        className="btn btn-active btn-primary w-full max-w-xs"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
