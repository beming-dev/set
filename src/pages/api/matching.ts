import { connectDB } from "../../db/config";
import { Matching } from "../../services/models/matching.schema";

export default async function createMessage(req, res) {
  try {
    if (req.method == "GET") {
      const { id } = req.query;

      await connectDB();

      const matchingInfo = await Matching.find({ buyer_id: id })
        .limit(5)
        .populate("seller_id")
        .sort({
          score: -1,
        });

      res.status(200).send(matchingInfo);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
