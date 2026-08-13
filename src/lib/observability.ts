/**
 * Service de Observabilidade e Monitoramento - Divino Sabor
 * Suporta Sentry, OpenTelemetry e métricas de Web Vitals.
 */

export interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

export interface MetricReport {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: string;
}

class ObservabilityService {
  private isSentryEnabled = false;
  private isOtelEnabled = false;
  private errorLogs: ErrorReport[] = [];
  private metricsLogs: MetricReport[] = [];

  constructor() {
    this.init();
  }

  private init() {
    // Verificação de ambiente para Sentry / OpenTelemetry
    if (typeof window !== 'undefined') {
      this.isSentryEnabled = Boolean((window as any).SENTRY_RELEASE || process.env.VITE_SENTRY_DSN);
      this.isOtelEnabled = Boolean(process.env.VITE_OTEL_EXPORTER_ENDPOINT);

      // Handler global para erros não capturados
      window.addEventListener('error', (event) => {
        this.captureError(event.error || new Error(event.message), {
          source: 'window.onerror',
          filename: event.filename,
          lineno: event.lineno,
        });
      });

      // Handler global para unhandled rejections
      window.addEventListener('unhandledrejection', (event) => {
        this.captureError(
          event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
          { source: 'window.unhandledrejection' }
        );
      });
    }
  }

  public captureError(error: Error, context?: Record<string, unknown>): ErrorReport {
    const report: ErrorReport = {
      message: error.message || 'Unknown Error',
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
    };

    this.errorLogs.push(report);

    // Envia ao console em dev e Sentry em prod se configurado
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Observability] Capturado erro:', report);
    }

    if (this.isSentryEnabled && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: context });
    }

    return report;
  }

  public recordMetric(name: string, value: number, budgetThresholds: { good: number; poor: number }): MetricReport {
    let rating: 'good' | 'needs-improvement' | 'poor' = 'good';
    if (value > budgetThresholds.poor) {
      rating = 'poor';
    } else if (value > budgetThresholds.good) {
      rating = 'needs-improvement';
    }

    const report: MetricReport = {
      name,
      value: Math.round(value * 100) / 100,
      rating,
      timestamp: new Date().toISOString(),
    };

    this.metricsLogs.push(report);

    if (rating === 'poor') {
      console.warn(`[Performance Budget Exceeded] ${name}: ${value}ms (poor threshold: ${budgetThresholds.poor}ms)`);
    }

    return report;
  }

  public getErrorLogs(): ErrorReport[] {
    return [...this.errorLogs];
  }

  public getMetricsLogs(): MetricReport[] {
    return [...this.metricsLogs];
  }

  public clearLogs(): void {
    this.errorLogs = [];
    this.metricsLogs = [];
  }
}

export const observability = new ObservabilityService();
