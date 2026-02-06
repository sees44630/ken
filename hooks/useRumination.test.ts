import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useRumination } from '@/hooks/useRumination';

// Mock the service
vi.mock('@/services/geminiService', () => ({
  ruminateDigitalStrategy: vi.fn(),
}));

describe('useRumination', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useRumination());
    
    expect(result.current.input).toBe('');
    expect(result.current.loading).toBe(false);
    expect(result.current.history).toEqual([]);
  });

  it('should set error if input is empty', async () => {
    const { result } = renderHook(() => useRumination());

    await act(async () => {
      await result.current.ruminate();
    });

    expect(result.current.error).toBe('يرجى إدخال تفاصيل للتحليل (النظام لا يعمل على الفراغ)');
  });

  it('should update input when typing', () => {
    const { result } = renderHook(() => useRumination());

    act(() => {
      result.current.setInput('New strategy');
    });

    expect(result.current.input).toBe('New strategy');
  });
});
