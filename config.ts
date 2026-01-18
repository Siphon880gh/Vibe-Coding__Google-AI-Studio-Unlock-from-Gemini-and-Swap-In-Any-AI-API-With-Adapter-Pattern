export interface AppConfig {
  provider: "gemini" | "openai";
  openaiImageModel: string;
  geminiImageModel: string;
  defaults: {
    aspectRatio: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  };
}

export const configData: AppConfig = {
  provider: "gemini", // Set to "openai" as requested by the current implementation state
  openaiImageModel: "dall-e-3",
  geminiImageModel: "gemini-2.5-flash-image",
  defaults: {
    aspectRatio: "1:1"
  }
};

export default configData;