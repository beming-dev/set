import { UserModel } from "../../services/models/users.schem";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "../../db/config";

export default async function handler(req, res) {
  console.log(1);
  try {
    await connectDB();
    const { email, password } = req.body;
    console.log(req.body);

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "124h",
      }
    );

    res.json({ token, profile: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
