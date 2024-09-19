import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup.hook";
const Signup = () => {
  const { signup } = useSignup();
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    console.log("Name :", name, "Value : ", value);
  };

  const handleSubmit = async () => {
    const check = await signup(Input);
    if (check) {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 items-center w-screen h-screen">
      <h1 className=" text-xl font-bold tracking-widest  text-sky-700">
        Signup User
      </h1>
      <label className="form-control w-full max-w-xs mb-5">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={Input.username}
          onChange={handleInput}
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </label>
      <label className="form-control w-full max-w-xs mb-5">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={Input.password}
          onChange={handleInput}
          className="input input-bordered input-primary  w-full max-w-xs "
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={Input.confirmPassword}
          onChange={handleInput}
          className="input input-bordered input-primary  w-full max-w-xs"
        />
        <div className="label text-sky-600">
          <Link to="/login">Already have account ?</Link>
        </div>
      </label>

      <button
        onClick={handleSubmit}
        className="btn btn-active btn-primary  w-full max-w-xs"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;