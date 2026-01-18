import configData from "../../config.ts";
import { ImageAdapter } from "./types";
import { GeminiImageAdapter } from "./GeminiImageAdapter";
import { OpenAIImageAdapter } from "./OpenAIImageAdapter";

export function getImageAdapter(): ImageAdapter {
  const provider = configData.provider.toLowerCase();

  switch (provider) {
    case "gemini":
      return new GeminiImageAdapter();
    case "openai":
      return new OpenAIImageAdapter();
    default:
      throw new Error(`Unsupported provider: ${provider}. Check config.ts`);
  }
}