
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Intelligence' | 'Infrastructure' | 'Creative';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface RuminationResult {
  steps: string[];
  summary: string;
}
