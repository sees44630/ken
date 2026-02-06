import { useState, useEffect } from 'react';
import { ruminateDigitalStrategy } from '@/services/geminiService';
import { RuminationResult } from '@/types';

interface HistoryItem {
  query: string;
  result: RuminationResult;
}

export const useRumination = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<RuminationResult | null>(null);
  
  // History State
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('boma_rumination_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Voice Input Logic
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'ar-SA';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => { setIsListening(false); setError('تعذر الوصول للميكروفون'); };
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(prev => prev ? `${prev} ${transcript}` : transcript);
      };

      recognition.start();
    } else {
      setError('المتصفح لا يدعم الإدخال الصوتي');
    }
  };

  const ruminate = async () => {
    if (!input.trim()) {
      setError('يرجى إدخال تفاصيل للتحليل (النظام لا يعمل على الفراغ)');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await ruminateDigitalStrategy(input);
      setResult(res);
      
      const newHistoryItem = { query: input, result: res };
      const updatedHistory = [newHistoryItem, ...history].slice(0, 5); 
      setHistory(updatedHistory);
      localStorage.setItem('boma_rumination_history', JSON.stringify(updatedHistory));
      
    } catch {
      setError('حدث خطأ في الاتصال بالشبكة العصبية. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  const loadHistoryItem = (item: HistoryItem) => {
    setInput(item.query);
    setResult(item.result);
  };

  return {
    input,
    setInput,
    loading,
    error,
    setError,
    result,
    history,
    ruminate,
    loadHistoryItem,
    isListening,
    startListening
  };
};
