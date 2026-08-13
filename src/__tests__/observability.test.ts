import { describe, it, expect, beforeEach } from 'vitest';
import { observability } from '../lib/observability';

describe('Esteira de Observabilidade & Performance', () => {
  beforeEach(() => {
    observability.clearLogs();
  });

  it('deve registrar e armazenar relatórios de erro com metadados e timestamp', () => {
    const error = new Error('Falha de teste de observabilidade');
    const report = observability.captureError(error, { feature: 'WhatsAppModal' });

    expect(report.message).toBe('Falha de teste de observabilidade');
    expect(report.context).toEqual({ feature: 'WhatsAppModal' });
    expect(report.timestamp).toBeDefined();

    const logs = observability.getErrorLogs();
    expect(logs.length).toBe(1);
    expect(logs[0].message).toBe('Falha de teste de observabilidade');
  });

  it('deve avaliar métricas com relação ao Performance Budget (good vs poor)', () => {
    const goodMetric = observability.recordMetric('FCP', 1200, { good: 1800, poor: 3000 });
    expect(goodMetric.rating).toBe('good');

    const poorMetric = observability.recordMetric('LCP', 4200, { good: 2500, poor: 4000 });
    expect(poorMetric.rating).toBe('poor');

    const metrics = observability.getMetricsLogs();
    expect(metrics.length).toBe(2);
  });
});
