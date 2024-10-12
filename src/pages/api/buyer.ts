import axios from "axios";
import { connectDB } from "../../db/config";
import BuyerAlias, { IBuyerAlias } from "../../services/models/buyer.schema";
import SellerAlias, { ISellerAlias } from "../../services/models/seller.schema";
import {
  calculateMarginTier,
  calculateMarketValueTier,
  calculateRevenueTier,
} from "../../util/calculator";
import { Matching } from "../../services/models/matching.schema";
import { NextApiRequest, NextApiResponse } from "next";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
      .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/gpt`, { prompt })
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
The value must be an actual number between 0 and 2.
The answer must be an output format.
    `;

    let result;

    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/gpt`, {
        prompt: softScorePrompt,
      })
      .then(({ data }) => (result = JSON.parse(data)));

    return parseFloat(result.similarity.average_score);
  }

  async function calcScores(buyer) {
    let result = 0;
    const sellers = await SellerAlias.find();

    console.time("exampleFunction");

    // seller들의 정보를 각각 병렬로 처리하기 위해 map을 사용
    const promises = sellers.slice(0, 1).map(async (seller) => {
      // 이미 매칭된 seller와 buyer가 있는지 확인
      const isExist = await Matching.findOne({
        buyer_id: buyer._id,
        seller_id: seller._id,
      });

      // 이미 매칭된 경우 종료
      if (isExist) return;

      // hardScore와 softScore를 병렬로 계산
      const [hardScore, softScore] = await Promise.all([
        calcHardScore(seller, buyer),
        calcSoftScore(seller, buyer),
      ]);

      result += hardScore + softScore;

      // 결과값이 NaN이 아닌 경우에만 DB 업데이트
      if (!isNaN(result)) {
        await Matching.findOneAndUpdate(
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
    });

    // 모든 비동기 작업이 완료될 때까지 기다림
    await Promise.all(promises);
    console.timeEnd("exampleFunction");
  }

  if (req.method == "POST") {
    try {
      await connectDB();
      const { data, userId }: any = req.body;

      const isExist = await BuyerAlias.findOne({ userId });
      if (isExist._id) {
        res.status(200).json({ id: isExist._id });
      } else {
        console.log("fuck");
      }

      if (data.revenue) {
        data.revenue = calculateRevenueTier(data.revenue);
      }
      if (data.valuation) {
        data.valuation = calculateMarketValueTier(data.valuation);
      }
      if (data.profitMargins) {
        data.profitMargins = calculateMarginTier(data.profitMargins);
      }

      const buyerData = await BuyerAlias.create({ ...data, userId });

      await calcScores(buyerData);

      res.status(200).json({ id: buyerData._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }
}
