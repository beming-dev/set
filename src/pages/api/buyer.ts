import axios from "axios";
import { connectDB } from "../../db/config";
import BuyerAlias, { IBuyerAlias } from "../../services/models/buyer.schema";
import SellerAlias, { ISellerAlias } from "../../services/models/seller.schema";
import {
  calculateMarginTier,
  calculateMarketValueTier,
  calculateRevenueTier,
} from "../../util/calculator";
import { Response } from "express";
import { Matching } from "../../services/models/matching.schema";

const dutchCities = [
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Utrecht",
  "Eindhoven",
  "Groningen",
  "Maastricht",
  "Leiden",
  "Haarlem",
  "Arnhem",
];

// industry 목록
const industries = [
  "Restaurants",
  "Fast Food",
  "Cafes",
  "Tea Rooms",
  "Estates",
  "Farm Experiences",
  "Vineyards",
  "Eco-Tourism Attractions",
  "Speciality Food Stores",
  "Gift and Souvenir Shops",
  "Art and Craft Markets",
];

export default async function handler(req: Request, res: Response) {
  async function calcGeographicScore(sellerPlace: string, buyerPlace: string) {
    const prompt = `
    I'll give you the name of two cities.
If city match city, or province match province. then print number 1
If two cities are in the same country or province contains the city, then print numebr 0.5.
Otherwise, print number 0.

city1: ${sellerPlace}
city2: ${buyerPlace}
`;

    let result = 0;

    await axios
      .post("http://localhost:3000/api/gpt", { prompt })
      .then(({ data }) => {
        result = parseInt(data);
      });

    return result;
  }

  async function calcHardScore(seller: ISellerAlias, buyer: IBuyerAlias) {
    let score = 0;

    if (seller.industry == buyer.industry) score++;
    if (seller.revenue == buyer.revenue) score++;
    else if (
      seller.revenue + 1 == buyer.revenue ||
      seller.revenue == buyer.revenue + 1
    )
      score += 0.5;
    if (seller.profitMargins == buyer.profitMargins) score++;
    else if (
      seller.profitMargins + 1 == buyer.profitMargins ||
      seller.profitMargins == buyer.profitMargins + 1
    )
      score += 0.5;

    const sellerPlace = seller.geographicLocation;
    const buyerPlace = buyer.geographicLocation;

    const geographicScore = await calcGeographicScore(sellerPlace, buyerPlace);
    if (!isNaN(geographicScore)) score += geographicScore;

    return score;
  }

  async function calcSoftScore(seller: ISellerAlias, buyer: IBuyerAlias) {
    const softScorePrompt = `
    {
  "task": "soft_matching_evaluation",
  "input_data": {
    "pair_1": ${seller},
    "pair_2": ${JSON.stringify(buyer)}
  },
  "criteria": [
    "business_model",
    "clients",
    "value_proposition",
    "revenue_streams",
    "cultural_integration_readiness",
    "communication_style",
    "decision_making_process",
    "historical_performance",
    "technology_infrastructure",
    "customer_base",
    "market_share",
    "brand_reputation",
    "strategic_vision",
    "leadership_style",
    "company_culture",
    "customer_satisfaction",
    "stakeholder_relationships",
    "ethical_standards",
    "values"
  ],
  "evaluation_method": {
    "step_1": "Evaluate and score the relevance of each criterion on a scale from 0 to 100%. If information is missing for any criterion, skip that part.",
    "step_2": "Calculate the average matching score by averaging the scores of all selected criteria. Weighted scoring can be applied if necessary."
  },
  "output_format": {
    "similarity": {
      "scores": {
        "business_model": "<score>",
        "clients": "<score>",
        "value_proposition": "<score>",
        "revenue_streams": "<score>",
        "cultural_integration_readiness": "<score>",
        "communication_style": "<score>",
        "decision_making_process": "<score>",
        "historical_performance": "<score>",
        "technology_infrastructure": "<score>",
        "customer_base": "<score>",
        "market_share": "<score>",
        "brand_reputation": "<score>",
        "strategic_vision": "<score>",
        "leadership_style": "<score>",
        "company_culture": "<score>",
        "customer_satisfaction": "<score>",
        "stakeholder_relationships": "<score>",
        "ethical_standards": "<score>",
        "values": "<score>"
      },
      "average_score": "<average_score>"
    }
  }
}

Please calculate the match score <score> in the output format by using the given input data.
The value must be an actual number between 0 and 1.
The answer must be an output format.
    `;

    let result;

    await axios
      .post("http://localhost:3000/api/gpt", { prompt: softScorePrompt })
      .then(({ data }) => (result = JSON.parse(data)));

    return parseFloat(result.similarity.average_score);
  }

  async function calcScores(buyer) {
    let result = 0;
    const sellers = await SellerAlias.find();

    for (let i = 0; i < 20; i++) {
      const seller = sellers[i];

      const isExist = await Matching.findOne({
        buyer_id: buyer._id,
        seller_id: seller._id,
      });

      if (isExist) continue;

      const hardScore = await calcHardScore(seller, buyer);
      const softScore = await calcSoftScore(seller, buyer);

      result += hardScore + softScore;

      if (!isNaN(result)) {
        return await Matching.findOneAndUpdate(
          {
            buyer_id: buyer._id,
            seller_id: seller._id,
          },
          {
            buyer_id: buyer._id,
            seller_id: seller._id,
            score: result,
          },
          {
            upsert: true,
            new: true,
          }
        );
      }
    }
  }

  if (req.method == "POST") {
    try {
      await connectDB();

      const { data }: any = req.body;

      if (data.revenue) {
        data.revenue = calculateRevenueTier(data.revenue);
      }
      if (data.valuation) {
        data.valuation = calculateMarketValueTier(data.valuation);
      }
      if (data.profitMargins) {
        data.profitMargins = calculateMarginTier(data.profitMargins);
      }

      const buyerData = await BuyerAlias.create(data);

      const result = await calcScores(buyerData);

      console.log(12, result);

      res.status(200).json({ id: buyerData._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
