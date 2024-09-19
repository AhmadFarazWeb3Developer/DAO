import { User } from "../Models/user.model.js";
import bcrypt from "bcrypt";
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized user", success: false });
    }
    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res
        .status(403)
        .json({ message: "Incorrect Password", success: false });
    }

    return res.status(201).json({
      message: "Login Successfull",
      username,
      success: true,
    });
  } catch (error) {
    console.log("Error in login controller");
    return res.status(500).json({ message: "Server error ", error });
  }
};

export { loginUser };
