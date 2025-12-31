import { GoogleGenAI } from "@google/genai";

// CRITICAL FIX: Safely retrieve API key to prevent browser crashes if process is undefined
const getApiKey = (): string => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignore errors
  }
  return '';
};

const apiKey = getApiKey();

// Initialize client only if key exists
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateProjectBrief = async (userInput: string): Promise<string> => {
  if (!ai || !apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return `[DEMO MODE - AI UNAVAILABLE]\n\nBased on your request regarding "${userInput}", we propose a comprehensive FEED study followed by an EPC execution plan. We will focus on optimizing logistics, ensuring HSE compliance, and delivering within the specified timeline.`;
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      You are a senior EPC (Engineering, Procurement, Construction) consultant for Zenthera Groups.
      The user is describing a heavy industrial project idea.
      Rewrite their input into a professional, technical project brief (approx 80-100 words).
      
      User Input: "${userInput}"
      
      Focus on:
      1. Technical feasibility & Engineering requirements.
      2. Safety (HSE) & Compliance standards.
      3. Commercial viability.
      
      Use professional industry terminology.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Unable to generate brief. Please proceed with manual entry.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Temporary connection issue with AI Service. Please manually describe your project scope.";
  }
};