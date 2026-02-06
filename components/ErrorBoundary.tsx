import { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '@/utils/logger';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('Uncaught error:', { error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-yellow-400 flex flex-col items-center justify-center p-8 text-center font-mono">
          <div className="text-6xl mb-6">
            <i className="fa-solid fa-triangle-exclamation animate-pulse"></i>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-widest mb-4">خطأ في النظام</h1>
          <p className="text-zinc-500 mb-8 max-w-md">
            حدث خطأ غير متوقع في المصفوفة الرقمية. يرجى إعادة تحميل الصفحة أو المحاولة لاحقاً.
          </p>
          <div className="bg-zinc-900/50 p-4 rounded text-left text-xs text-red-400 mb-8 max-w-lg overflow-auto border border-red-900/30">
            {this.state.error?.toString()}
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-yellow-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            إعادة تهيئة النظام
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
