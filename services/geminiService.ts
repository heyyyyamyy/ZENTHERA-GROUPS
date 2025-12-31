import { GoogleGenAI } from "@google/genai";

// Safely retrieve API key to prevent 'process is not defined' crash in browser environments
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();

// Initialize client securely. 
const ai = new GoogleGenAI({ apiKey });

export const generateProjectBrief = async (userInput: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return "We will engineer a robust solution for your energy infrastructure needs. (AI Refinement unavailable without API Key)";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      You are a senior EPC (Engineering, Procurement, Construction) consultant for Zenthera Groups, a global leader in Offshore, Oil, Gas, and Power infrastructure.
      The user is asking for a quote or describing a heavy industrial project idea.
      Rewrite their rough input into a professional, technical project brief suitable for a tender or proposal.
      
      Focus on:
      - Safety and compliance (HSE)
      - Technical specifications (megawatts, pipeline diameter, depth, etc.)
      - Logistics and feasibility
      
      Keep it under 100 words. Use industry terminology (e.g., "upstream/downstream", "FEED study", "combined cycle", "subsea templates").
      
      User Input: "${userInput}"
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Could not generate a brief at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI assistant. Please try again manually describing your project.";
  }
};