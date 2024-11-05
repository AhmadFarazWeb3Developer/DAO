import { useState } from "react";
import { toast } from "react-hot-toast";

const useSignup = () => {
  const [success, setSuccess] = useState(false);
  const signup = async (Input) => {
    const { username, password, confirmPassword } = Input;
    const response = await fetch("http://localhost:8000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, confirmPassword }),
    });
    const data = await response.json();
    if (response.status === 201) {
      toast.success(`${data.username} ${data.message}`);
      let success = data.success;
      setSuccess(success);
    } else {
      toast.error(data.message, data.error);
    }
    try {
    } catch (error) {
      toast.error(error);
    }
  };
  return { signup, success };
};
export { useSignup };
