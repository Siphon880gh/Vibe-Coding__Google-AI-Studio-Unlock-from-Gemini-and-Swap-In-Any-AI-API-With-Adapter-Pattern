import { ImageAdapter } from "./types";
import { generateImage as legacyGenerateImage } from "../geminiService";
import configData from "../../config.ts";

export class GeminiImageAdapter implements ImageAdapter {
  async generateImage(input: {
    prompt: string;
    aspectRatio?: string;
  }): Promise<{ imageUrl: string; mimeType?: string }> {
    const aspectRatio = (input.aspectRatio || configData.defaults.aspectRatio) as any;
    
    // Wrapping the existing geminiService logic
    const imageUrl = await legacyGenerateImage(input.prompt, { aspectRatio });
    
    return {
      imageUrl,
      mimeType: imageUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg"
    };
  }
}