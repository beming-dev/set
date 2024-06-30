//contact.js
import { BModel } from "../../services/models/bmodel.schema";
import { ContactModel } from "../../services/models/contact.schema";
import { connectDB } from "/db/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const businessDatas = await BModel.find();
      res.status(200).json(businessDatas);
    } catch (error) {
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
