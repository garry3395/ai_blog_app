import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return response.candidates[0].content.parts[0].text;
}

export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await main(prompt + " Generate a blog content for this topic in simple text format");
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default main;
