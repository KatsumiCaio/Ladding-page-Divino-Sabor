/**
 * Módulo de Segurança, Rate Limiting e Validação - Divino Sabor
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class SecurityService {
  private rateLimitStore: RateLimitStore = {};

  /**
   * Rate limiter básico em memória para proteção de formulários/WhatsApp
   * @param key Identificador da ação (ex: 'whatsapp_order')
   * @param maxRequests Máximo de requisições permitidas
   * @param windowMs Janela de tempo em milissegundos
   */
  public checkRateLimit(key: string, maxRequests = 5, windowMs = 60000): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
    const now = Date.now();
    const record = this.rateLimitStore[key];

    if (!record || now > record.resetTime) {
      this.rateLimitStore[key] = {
        count: 1,
        resetTime: now + windowMs,
      };
      return { allowed: true, remaining: maxRequests - 1, retryAfterSeconds: 0 };
    }

    if (record.count >= maxRequests) {
      const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
      return { allowed: false, remaining: 0, retryAfterSeconds };
    }

    record.count += 1;
    return {
      allowed: true,
      remaining: maxRequests - record.count,
      retryAfterSeconds: 0,
    };
  }

  /**
   * Sanitiza strings para evitar injeções maliciosas ou caracteres problemáticos em URLs
   */
  public sanitizeInput(input: string): string {
    if (!input) return '';
    return input
      .trim()
      .replace(/[<>]/g, '') // remove tags HTML perigosas
      .slice(0, 1000); // limita tamanho para prevenir estouro de payload
  }

  /**
   * Validação de conformidade com LGPD
   */
  public validateLGPDConsent(): boolean {
    if (typeof localStorage === 'undefined') return true;
    return localStorage.getItem('divino_sabor_lgpd_consent') === 'true';
  }

  public setLGPDConsent(consented: boolean): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('divino_sabor_lgpd_consent', consented ? 'true' : 'false');
    }
  }

  public resetRateLimits(): void {
    this.rateLimitStore = {};
  }
}

export const security = new SecurityService();
