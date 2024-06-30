import { BusinessModel } from "../../../services/models/business.schema";
import { connectDB } from "../../../db/config";
//contact.js
const getRankedData = (actualData, condition) => {
  // I'm looking for some small business
  const newData = [];
  actualData.forEach((data) => {
    newData.push({ ...data._doc });
  });
  newData.forEach((data) => {
    data["cnt"] = 0;
    for (let key in condition) {
      const value = condition[key];
      switch (key) {
        case "budget":
          if (data.budget == value[0]) {
            data.cnt++;
          }
          break;
        case "size":
          if (data.size >= value[0] || data.size <= value[1]) {
            data.cnt++;
          }
          break;
        case "sector":
          if (data.industry == value) {
            data.cnt++;
          }
          break;
        case "location":
          if (data.location == value) {
            data.cnt++;
          }
          break;
        case "transaction":
          if (data.transaction == value) {
            data.cnt++;
          }
          break;
        case "turnover":
          if (data.turnover >= value[0] || data.turnover <= value[1]) {
            data.cnt++;
          }
          break;
        default:
          break;
      }
    }
  });

  return newData;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let {
        budget,
        size,
        sector = "",
        location = "",
        transaction = "",
        turnover,
      } = req.body;

      if (!budget) {
        budget = ["0"];
      }
      if (!size) {
        size = ["0", "0"];
      } else if (size.length == 1) {
        size.push("10000000");
      }
      if (!turnover) {
        turnover = ["0", "0"];
      } else if (turnover.length == 1) {
        turnover.push("10000000");
      }
      await connectDB();
      const actualData = await BusinessModel.find({
        $or: [
          { budget: parseInt(budget[0]) },
          { size: { $gte: parseInt(size[0]), $lte: parseInt(size[1]) } },
          { sector },
          { location },
          { transaction },
          {
            turnover: {
              $gte: parseInt(turnover[0]),
              $lte: parseInt(turnover[1]),
            },
          },
        ],
      }).limit(6);

      // I'm looking for some small business
      const rankedData = getRankedData([...actualData], {
        budget,
        size,
        sector,
        location,
        transaction,
        turnover,
      });

      rankedData.sort((a, b) => {
        return b.cnt - a.cnt;
      });

      const result = rankedData.slice(0, 6);

      res.status(200).json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to find data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
