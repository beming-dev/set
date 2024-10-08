import OpenAI from "openai";

export default async function createMessage(req, res) {
  const { prompt } = req.body;

  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const openai = new OpenAI({
      apiKey,
    });
    const resposnse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json(resposnse.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
