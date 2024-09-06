import { connectDB } from "../../db/config";
import { BusinessModel } from "../../services/models/business.schema";

export default async function createMessage(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const body = JSON.stringify({
    messages: [{ role: "assistant", content: prompt }],
    model: "gpt-3.5-turbo",
    stream: false,
  });

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
    console.log(content);
    // const cleanedMessage = content.replace(/^```json\s*|```$/g, "").trim();
    // const refinedData = getNewData(JSON.parse(cleanedMessage));

    res.status(200).json({ data: content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
