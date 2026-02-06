type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isProd = import.meta.env.PROD;

  private formatMessage(level: LogLevel, message: string, data?: any) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  info(message: string, data?: any) {
    if (!this.isProd) {
      console.info(this.formatMessage('info', message), data || '');
    }
  }

  warn(message: string, data?: any) {
    console.warn(this.formatMessage('warn', message), data || '');
  }

  error(message: string, error?: any) {
    console.error(this.formatMessage('error', message), error || '');
  }

  debug(message: string, data?: any) {
    if (!this.isProd) {
      console.debug(this.formatMessage('debug', message), data || '');
    }
  }
}

export const logger = new Logger();
