// profile.js
import { connectDB } from "../src/db/config";
import jwt from "jsonwebtoken";
import { UserModel } from "../src/services/models/users.schem";

export default async function handler(req, res) {
  try {
    await connectDB();
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(403).json({ error: "No authorization token provided" });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ error: "User must login" });
    }

    const jwtData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = jwtData.userId;

    if (req.method === "GET") {
      // 获取用户信息
      const user = await UserModel.findById(userId);
      res.status(200).json(user);
    } else if (req.method === "PUT") {
      // 更新用户信息
      const updateData = req.body; // 用户提交的更新数据
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        updateData,
        { new: true }
      );
      res
        .status(200)
        .json({ message: "Profile updated successfully", updatedUser });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error(err);
    if (err.name === "JsonWebTokenError") {
      res.status(401).json({ error: "Invalid token" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
