import { IBuyerAlias } from "../services/models/buyer.schema";
import { Matching } from "../services/models/matching.schema";
import { ISellerAlias } from "../services/models/seller.schema";
import axios from "axios";

// Helper function to standardize industry inputs
// function standardizeIndustry(input) {
//   const industries = [
//     "Restaurants",
//     "Fast Food",
//     "Cafes",
//     "Tea Rooms",
//     "Estates",
//     "Farm Experiences",
//     "Vineyards",
//     "Eco-Tourism Attractions",
//     "Specialty Food Stores",
//     "Gift and Souvenir Shops",
//     "Art and Craft Markets",
//   ];
//   return industries.includes(input) ? input : null;
// }

// async function getGeographicScore(
//   city1: String,
//   city2: String
// ): Promise<number> {
//   const prompt = `
//   Ill give you the name of two cities. Then calculate a score according to the given method and answer me that score.
// The answer must be just a number. 1 or 0.5. Dont say any other thing.

//   city1: ${city1},
//   city2: ${city2}
//   method: If city1 and city2 is the same city, then score is 1. If two cities are in the same country, then score is 0.5. Whether two cities are same or not should be calculated by the geographic location on the map, not a string. For any other cases, the score is 0.
//   `;

//   const { data } = await axios.post("/api/gpt", {
//     prompt,
//   });

//   return parseInt(data);
// }

// // Function to calculate matching score
// async function calculateMatchingScore(
//   buyer: IBuyerAlias,
//   seller: ISellerAlias
// ) {
//   let score = 0;

//   // Industry Sector
//   if (buyer.industry == seller.industry) {
//     score += 1;
//   }

//   // Geographic Location
//   const geographicScore = await getGeographicScore("city1", "city2");
//   score += geographicScore;

//   // Revenue
//   const revenueDifference = Math.abs(buyer.revenue - seller.revenue);
//   if (revenueDifference === 0) {
//     score += 1;
//   } else if (revenueDifference === 1) {
//     score += 0.5;
//   }

//   // Profit Margins
//   const profitDifference = Math.abs(buyer.profitMargins - seller.profitMargins);
//   if (profitDifference === 0) {
//     score += 1;
//   } else if (profitDifference === 1) {
//     score += 0.5;
//   }

//   // Current Market Valuation
//   const valuationDifference = Math.abs(buyer.valuation - seller.valuation);
//   if (valuationDifference === 0) {
//     score += 1;
//   } else if (valuationDifference === 1) {
//     score += 0.5;
//   }

//   if (score > 3) {
//     getSubScore(buyer, seller);
//   }

//   return score;
// }

// function main() {
//   const buyers: IBuyerAlias[] = [];
//   const sellers: IBuyerAlias[] = [];

//   buyers.forEach((buyer) => {
//     sellers.forEach(async (seller) => {
//       const matched = await Matching.findByBuyerAndSeller(
//         buyer._id,
//         seller._id
//       );

//       if (!matched) {
//         const score = calculateMatchingScore(buyer, seller);
//         await Matching.create({
//           buyer_id: buyer._id,
//           seller_id: seller._id,
//           score,
//         });
//       }
//     });
//   });
// }

async function getSubScore(buyer: any, seller: any) {
  const prompt = `
  {
  "task": "soft_matching_evaluation",
  "input_data": {
    "pair_1": ${buyer.toString()},
    "pair_2": ${seller.toString()}
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

The answer is given only as a JSON value identical to the output_format format.
  `;

  const { data } = await axios.post("/api/gpt", {
    prompt,
  });

  console.log(data);

  return data;
}

export default function Home() {
  const buyer = {
    "Buyer #": 1,
    "Available Capital": 3000000,
    "Access to Financing": "High",
    "Previous Investment Performance":
      "Several successful exits in tech startups",
    "Industry Experience": "10 years in tech",
    "Strategic Vision Alignment": "Fully aligned",
    "Operational Involvement Preferences": "Prefers hands-on involvement",
    "Technological and Innovation Capabilities": "Highly capable",
    "Leadership Style": "Visionary",
    "Management Experience": "12 years in tech",
    "Management Style": "Results-driven",
    "Cultural Fit": "Excellent",
    "Strategic Vision": "Expanding tech operations",
    "Communication Style": "Clear and concise",
    "Communication Frequency": "Regular updates",
    "Ethical Standards": "High",
    "Decision-Making Process": "Collaborative",
    "Conflict Resolution": "Proactive",
    "Growth Objectives": "30% annual growth",
    "Market Expansion Plans": "Expanding to new markets",
    "Innovation and Technology Plans": "Investing in new tech",
    "Stakeholder Management Skills": "Excellent",
    "Customer and Supplier Relationship Strategies":
      "Strong relationships with suppliers and clients",
    "Employee Management and Retention Strategies":
      "High focus on employee retention",
    "Willingness to Follow Existing Transition Plans":
      "Willing to integrate existing plans",
    "Plans for Owner Involvement": "Plans to involve owner as advisor",
    "Readiness for Cultural Integration": "High",
    "Buyer’s Story":
      "Founded a successful tech startup, looking to diversify investments",
  };

  const seller = {
    "Business #": 1,
    "Business Model": "Manufacturing eco-friendly packaging solutions.",
    "The Clients": "Large food and beverage companies.",
    "Value Proposition":
      "Our packaging is 100% recyclable and reduces costs for clients.",
    "Product/Service Offerings": 25,
    "Revenue Streams": "Product sales, consultancy services.",
    "Marketing Channels": "Online, trade shows, direct sales.",
    "Geographic Location": "Amsterdam",
    Revenue: 5000000,
    "Profit Margins": "20%",
    "Economic Indicators": "Positive, driven by eco-friendly trends.",
    "Regulatory Environment": "Favorable for eco-friendly products.",
    "Media Coverage": "Positive media coverage.",
    "Strategic Vision": "Expanding into new markets.",
    "Innovation and Technology Adoption":
      "Investing in new eco-friendly technologies.",
    "Market Expansion Capability": "High, with a focus on Europe.",
    "Partnerships and Alliances": "Partnering with major food companies.",
    "Leadership Style": "Visionary and innovative.",
    "Company Culture": "Sustainability-focused.",
    "Management Style": "Agile and adaptive.",
    "Employee Satisfaction": "High (90%)",
    "Customer Satisfaction": "High (85%)",
    "Stakeholder Relationships": "Strong relationships with stakeholders.",
    "Ethical Standards": "High ethical standards.",
    Values: "Core values: sustainability, innovation.",
    "Diversity & Inclusion": "Promotes diversity and inclusion.",
    "Transition Plan Compatibility":
      "Seamless transition with comprehensive plan.",
    "Owner Involvement": "Owner to remain involved for 1 year.",
    "Cultural Integration Readiness": "High readiness for integration.",
    "Seller Story": "Founded to address the need for sustainable packaging.",
    "Communication Style": "Clear and transparent.",
    "Decision-Making Process": "Collaborative decision-making.",
    "Conflict Resolution": "Proactive and solution-oriented.",
    "Communication Frequency": "Regular updates and meetings.",
  };

  getSubScore(buyer, seller).then(({ data }) => console.log(JSON.parse(data)));
  return <></>;
}

// Hi guys. Implement algorithm is somewhat over.

// To use that algorithm, first we should have some data on our database. I already made data schema on our database.

// In our algorithm. Im using chatGPT on two parts.
//  First one is to calculate Geographic Score. If I enter the names of two cities, then ChatGPT calculate Geographic Score.
//  Second one is to calculate soft matching score. I used Jason's prompt, so GPT will give us average_score and scores for each field. You guys can chack it on "match with prompt" file.

//  One thing I'm considering about is to use the GPT or not to calculate Industry Sector score. If buyers and sellers select one option which we made in advance, we dont need to use GPT.

// Finally, to reduce the chatGPT usage I made matching score Document on our database. So, we can save the matching score and dont need to use GPT whenever users search something. What we have to do is only update the score when new buyers and sellers register, or they update some fields.
