import Joi from "joi";

const signupValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      username: Joi.string().min(5).max(100).required(),
      password: Joi.string().min(3).max(100).required(),
      confirmPassword: Joi.string().min(3).max(100).required(),
    });
    
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: "Bad Request", error: error.details });
    }
    next();
  } catch (error) {
    console.log("Error in signup middleware");
    return res.status(500).json({ message: "Server error ", error });
  }
};

export { signupValidation };
