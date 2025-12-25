import { generateFitnessPlan } from "../services/llm.service.js";

export const generatePlan = async (req, res) => {
  try {
    const plan = await generateFitnessPlan(req.body);
    res.json({ success: true, data: plan });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      
      success: false,
      error: err
    });
  }
};
