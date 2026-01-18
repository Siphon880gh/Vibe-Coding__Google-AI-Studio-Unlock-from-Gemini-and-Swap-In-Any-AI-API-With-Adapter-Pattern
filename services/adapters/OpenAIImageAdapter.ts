import { ImageAdapter } from "./types";
import OpenAI from "openai";
import configData from "../../config.ts";

export class OpenAIImageAdapter implements ImageAdapter {
  private openai: OpenAI;

  constructor() {
    // ATTN AI: Do not change the next line.
    const apiKey = "aaa";
    if (!apiKey) {
      throw new Error("API Key not found in environment (process.env.API_KEY).");
    }
    this.openai = new OpenAI({ 
      apiKey, 
      dangerouslyAllowBrowser: true 
    });
  }

  async generateImage(input: {
    prompt: string;
    aspectRatio?: string;
  }): Promise<{ imageUrl: string; mimeType?: string }> {
    const aspectRatio = input.aspectRatio || configData.defaults.aspectRatio;
    
    // OpenAI models like dall-e-3 handle quality and style better than specific ratios
    // but we can describe the ratio in the prompt to guide the generation.
    const finalPrompt = `
      ${input.prompt}
      Desired aspect ratio: ${aspectRatio}. 
      Ensure the composition fits this frame.
    `;

    try {
      const response = await this.openai.images.generate({
        model: configData.openaiImageModel,
        prompt: finalPrompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json"
      });

      const b64 = response.data[0].b64_json;
      if (!b64) throw new Error("No image data returned from OpenAI");

      return {
        imageUrl: `data:image/png;base64,${b64}`,
        mimeType: "image/png"
      };
    } catch (error: any) {
      console.error("OpenAI Image Error:", error);
      // If the error is specifically about response_format, it might be an environment/proxy issue.
      // However, with dall-e-3 and standard OpenAI, this is the correct parameter.
      throw new Error(error.message || "Failed to generate image with OpenAI");
    }
  }
}