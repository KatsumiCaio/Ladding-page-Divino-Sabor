/**
 * Utilitário de Performance Budget e Métricas do Sistema
 */
import { observability } from './observability';

export const PERFORMANCE_BUDGETS = {
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint em ms
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint em ms
  FID: { good: 100, poor: 300 },   // First Input Delay em ms
  CLS: { good: 0.1, poor: 0.25 },   // Cumulative Layout Shift
  BUNDLE_TARGET_KB: 500,          // Limite do orçamento de bundle
};

export function measurePerformanceBudget(): void {
  if (typeof window === 'undefined' || !window.performance) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find((entry) => entry.name === 'first-contentful-paint');

      if (fcp) {
        observability.recordMetric('FCP', fcp.startTime, PERFORMANCE_BUDGETS.FCP);
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const domInteractive = navigation.domInteractive;
        observability.recordMetric('DOM_Interactive', domInteractive, { good: 1500, poor: 3000 });
      }
    }, 1000);
  });
}
