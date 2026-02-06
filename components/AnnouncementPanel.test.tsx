import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import AnnouncementPanel from '@/components/AnnouncementPanel';

describe('AnnouncementPanel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<AnnouncementPanel />);
    expect(screen.getByText('خصم خاص 20%')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('cycles through ads over time', async () => {
    render(<AnnouncementPanel />);
    
    // First ad
    expect(screen.getByText('خصم خاص 20%')).toBeInTheDocument();

    // Advance time by 6 seconds (interval)
    act(() => {
      vi.advanceTimersByTime(6000);
    });

    // Second ad
    expect(screen.getByText('إطلاق عقدة جديدة')).toBeInTheDocument();
  });
});
