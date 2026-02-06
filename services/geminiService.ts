import { GoogleGenAI, Type } from "@google/genai";
import { z } from "zod";

const RuminationSchema = z.object({
  summary: z.string(),
  steps: z.array(z.string())
});

export type RuminationResponse = z.infer<typeof RuminationSchema>;

class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || '' });
  }

  public async ruminate(prompt: string): Promise<RuminationResponse> {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      throw new Error('مفتاح API غير مُهيأ. يرجى إضافة VITE_API_KEY في إعدادات المشروع.');
    }
    
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.0-flash-exp', // Updated model
        contents: `أنت "بومة ستور"، كيان رقمي ذكي يقدم خدمات رقمية متطورة. شعارك: "التميز الرقمي، ببساطة. دقة في الاختيار.. سرعة في التنفيذ.. وأمان يتجاوز التوقعات".
        حلل طلب المستخدم التالي وقدم استراتيجية رقمية واضحة باللغة العربية حصراً.
        طلب المستخدم: ${prompt}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: {
                type: Type.STRING,
                description: "ملخص موجز للحل الرقمي المقترح."
              },
              steps: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "خطوات عملية محددة لتنفيذ الاستراتيجية."
              }
            },
            required: ["summary", "steps"]
          }
        }
      });

      const rawData = JSON.parse(response.text || '{}');
      const validated = RuminationSchema.safeParse(rawData);

      if (!validated.success) {
        console.error("Validation failed", validated.error);
        throw new Error("Invalid AI response format");
      }

      return validated.data;
    } catch (error) {
      console.error("Gemini Service Error", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
export const ruminateDigitalStrategy = (prompt: string) => geminiService.ruminate(prompt);
