import { BusinessModel } from "../../../services/models/business.schema";
import { connectDB } from "../../../db/config";
//contact.js
export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { businessData } = req.body;
      await connectDB();
      await BusinessModel.create(businessData);
      res.status(200).json({ data: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to find data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
