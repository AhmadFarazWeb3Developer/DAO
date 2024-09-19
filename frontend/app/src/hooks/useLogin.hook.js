import toast from "react-hot-toast";

const useLogin = () => {
  const login = async (Input) => {
    const { username, password } = Input;

    const response = await fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = response.json();
    if (response.status === 201) {
      toast.success(data.message, data.username, data.success);
      console.log(data.message, data.success);
    } else {
      toast.error(data.message, data.success);
      console.log(data.message, data.success);
    }
  };
  return { login };
};

export { useLogin };
