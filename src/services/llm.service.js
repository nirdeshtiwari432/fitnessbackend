import { OpenRouter } from "@openrouter/sdk";
import dotenv from "dotenv";
dotenv.config();
const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY
});

export const generateFitnessPlan = async (user) => {
  const prompt = `
Create a personalized fitness plan in JSON.

User details:
Name: ${user.name}
Age: ${user.age}
Gender: ${user.gender}
Height: ${user.height}
Weight: ${user.weight}
Goal: ${user.goal}
Fitness Level: ${user.level}
Workout Location: ${user.location}
Diet Preference: ${user.diet}
Medical History: ${user.medical || "None"}
Stress Level: ${user.stress || "Normal"}

Return JSON ONLY in this format:
{
  "workoutPlan": { "day1": [], "day2": [] },
  "dietPlan": { "breakfast": [], "lunch": [], "dinner": [] },
  "tips": []
}
`;

  const completion = await openrouter.chat.send({
    model: "openai/gpt-oss-120b:free",
    messages: [{ role: "user", content: prompt }]
  });

  const text = completion.choices[0].message.content;

  return JSON.parse(text);
};
