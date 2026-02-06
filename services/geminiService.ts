
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const ruminateDigitalStrategy = async (prompt: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
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

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return { summary: "حدث خطأ في الشبكة الرقمية.", steps: ["تحديث الصفحة", "المحاولة مرة أخرى"] };
  }
};

export const chatWithRuminant = async (history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'أنت ممثل "بومة ستور" للخدمات الرقمية. نبرتك احترافية، مستقبلية، وموثوقة. استخدم مصطلحات مثل "تحليل البيانات"، "تأمين الشبكة"، "سرعة التنفيذ". لغتك هي العربية.',
    }
  });

  const lastMsg = history[history.length - 1].parts[0].text;
  const result = await chat.sendMessage({ message: lastMsg });
  return result.text;
};
