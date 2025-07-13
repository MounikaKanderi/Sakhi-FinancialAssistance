
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: SYSTEM_INSTRUCTION,
  },
});

export const getBotResponseStream = async (message: string): Promise<AsyncGenerator<GenerateContentResponse>> => {
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Gemini API error in getBotResponseStream:", error);
    throw new Error("Failed to get response from Gemini API.");
  }
};
