import jwt from "jsonwebtoken";
import userModal from "../models/userModal.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModal.findOne({ email });

    if (!existingUser) {
      return
    }

    let isPasswordCorrect;
    if (password === existingUser.password) {
      isPasswordCorrect = true;
    }

    if (!isPasswordCorrect)
      return

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "CHROLLO",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log(req.body);

  try {
    const existingUser = await userModal.findOne({ email });

    if (existingUser) {
    return
    }

    if (password !== confirmPassword) {
     return
    }
    const result = await userModal.create({
      email,
      password,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "CHROLLO", {
      expiresIn: "1h",
    });

    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
