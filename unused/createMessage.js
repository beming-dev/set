import { connectDB } from "../src/db/config";
import { BusinessModel } from "../src/services/models/business.schema";

export default async function createMessage(req, res) {
  const { messages } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const defaultPrompt = `
  "Analyze the input description to match against the predefined categories for Business Size, Transaction Type, Turnover Indication (yearly), Budget and Asking Price, Industry and Sector, and Location. Output the matching categories in a strict format suitable for direct integration into API calls and webpage filters. The output format should list the matched categories without additional text or explanation, formatted as follows:

Business Size: [Matched Value]
Transaction: [Matched Value]
Turnover Indication (yearly): [Matched Value]
Budget and Asking Price: [Matched Value]
Industry and Sector: [Matched Value]
Location: [Matched Value]
Ensure that the output only contains categories that were explicitly mentioned in the input, excluding any that were not specified."

Example of Expected Bot Output Format:

If the user says, "I am looking to fully own a café in Friesland with a cozy atmosphere, budgeting less than €100,000 for this venture, expecting a yearly turnover of €10,000 to €20,000," the bot should output exactly in the following format:

yaml
Copy code
Business Size: €50,000-€100,000
Transaction: Fully sell
Turnover Indication (yearly): €10,000-€20,000
Budget and Asking Price: <€100,000
Industry and Sector: Cafés
Location: Friesland

User
Given Classification System for Reference:

Business Size & Budget and Asking Price:

Less than €50,000；
€50,000-€100,000；
€100,000-€200,000；
€200,000-€500,000；
€500,000-€1,000,000；
More than €1,000,000；
Transaction:

Fully sell
Merge
Turnover Indication (yearly):

Less than €5,000；
€5,000-€20,000；
€20,000-€50,000；
€50,000-€100,000；
More than €100,000；
Industry and Sector:

Restaurants
Fast Food
Cafes
Tea Rooms
Estates
Farm Experiences
Vineyards
Eco-Tourism Attractions
Specialty Food Stores
Gift and Souvenir Shops
Art and Craft Markets
Location:

North Holland (Noord-Holland)
South Holland (Zuid-Holland)
Friesland
Gelderland
Limburg
North Brabant (Noord-Brabant)
Utrecht
Overijssel
Zeeland
Drenthe
Groningen
Flevoland

p,s, If the location is not specific,Than u need to match the loacation to some of those that provides,maybe the give u a city, than u match the province,If the people asking using no specific filters, than u don't need to match, the format of the output should be json
If there is no specific match for a given filter, output "NaN". If there are no matches for all filters, then all outputs should be "NaN".
`;

  const body = JSON.stringify({
    messages: [{ role: "assistant", content: defaultPrompt + messages }],
    model: "gpt-3.5-turbo",
    stream: false,
  });

  const getNewData = (originalData) => {
    const budget = originalData["Budget and Asking Price"]
      .replace(/,/g, "")
      .match(/\d+/g);
    const size = originalData["Business Size"].replace(/,/g, "").match(/\d+/g);
    const sector = originalData["Industry and Sector"];
    const location = originalData["Location"];
    const transaction = originalData["Transaction"];
    const turnover = originalData["Turnover Indication (yearly)"]
      .replace(/,/g, "")
      .match(/\d+/g);
    const result = {
      budget: budget,
      size: size,
      sector: sector,
      location: location,
      transaction: transaction,
      turnover: turnover,
    };
    return result;
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });
    const data = await response.json();
    const content = data.choices[0].message.content;
    const cleanedMessage = content.replace(/^```json\s*|```$/g, "").trim();
    const refinedData = getNewData(JSON.parse(cleanedMessage));

    res.status(200).json({ data: refinedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
