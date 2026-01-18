export interface ImageAdapter {
  generateImage(input: {
    prompt: string;
    aspectRatio?: string;
  }): Promise<{ imageUrl: string; mimeType?: string }>;
}