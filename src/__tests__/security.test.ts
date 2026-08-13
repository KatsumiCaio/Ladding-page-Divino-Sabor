import { describe, it, expect, beforeEach } from 'vitest';
import { security } from '../lib/security';

describe('Esteira de Segurança, Rate Limit e Sanitização', () => {
  beforeEach(() => {
    security.resetRateLimits();
  });

  it('deve sanitizar entradas maliciosas removendo tags HTML e limitando tamanho', () => {
    const dangerousInput = '<script>alert("xss")</script> Quero um bolo de churros';
    const sanitized = security.sanitizeInput(dangerousInput);

    expect(sanitized).not.toContain('<script>');
    expect(sanitized).not.toContain('</script>');
    expect(sanitized).toContain('Quero um bolo de churros');
  });

  it('deve aplicar rate limit bloqueando chamadas excessivas em curto intervalo', () => {
    const key = 'test_whatsapp_flood';

    // Permite até 3 requisições
    for (let i = 0; i < 3; i++) {
      const res = security.checkRateLimit(key, 3, 60000);
      expect(res.allowed).toBe(true);
    }

    // A quarta deve ser bloqueada
    const blockedRes = security.checkRateLimit(key, 3, 60000);
    expect(blockedRes.allowed).toBe(false);
    expect(blockedRes.remaining).toBe(0);
    expect(blockedRes.retryAfterSeconds).toBeGreaterThan(0);
  });
});
