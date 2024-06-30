import { RecordModel } from "/services/models/record.schem";
import { connectDB } from "/db/config";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  try {
    await connectDB();
    let email;
    try {
      const authorization = req.headers.authorization;
      const token = authorization.split(" ")[1];
      const jwtData = jwt.verify(token, process.env.JWT_SECRET);
      email = jwtData.email;
    } catch (err) {
      email = "";
    }
    const { action, value } = req.query;
    await RecordModel.create({
      email,
      action,
      value,
    });
    res.status(200).send();
  } catch (err) {
    console.error(err); // 输出错误到日志
    res.status(500).json({ message: "Internal Server Error" }); // 发送错误响应
  }
}
