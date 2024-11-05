import { useState } from "react";
import toast from "react-hot-toast";

const useLogin = () => {
  const [success, setSuccess] = useState(false);
  const login = async (Input) => {
    const { username, password } = Input;

    const response = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.status === 201) {
      toast.success(data.message, data.username, data.success);
      console.log(data.message, data.success);
      let success = data.success;
      setSuccess(success);
    } else {
      toast.error(data.message, data.success);
      console.log(data.message, data.success);
    }
  };
  return { login, success };
};

export { useLogin };
