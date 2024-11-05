import { User } from "../Models/user.model.js";
import bcrypt from "bcrypt";
const signupUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status()
        .json({ message: "Username Already Exist ! , try other username" });
    }

    const userModel = new User({
      username,
      password,
    });

    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();

    return res.status(201).json({
      message: "successfully signed up",
      username,
      success: true,
    });
  } catch (error) {
    console.log("Error in signup controller");
    return res.status(500).json({ message: "Server error ", error });
  }
};

export { signupUser };
