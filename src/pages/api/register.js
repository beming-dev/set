import { UserModel } from "/services/models/users.schem";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "/db/config";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    console.log(req.body);
    await connectDB();
    const { firstname, lastname, password, email } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      firstname,
      lastname,
      password: hashedPassword,
      email,
    });

    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      profile: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
