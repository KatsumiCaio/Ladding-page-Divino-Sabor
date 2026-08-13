import { describe, it, expect } from 'vitest';
import { CLIENT_DATA } from '../data/copyData';

describe('Esteira de Validação de Termos e LGPD', () => {
  it('garante que os dados de contato oficiais estejam preenchidos corretamente', () => {
    expect(CLIENT_DATA.whatsapp).toBeDefined();
    expect(CLIENT_DATA.whatsappRaw).toContain('5515');
    expect(CLIENT_DATA.location).toContain('Capão Bonito');
  });
});
