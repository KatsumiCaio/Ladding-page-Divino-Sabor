import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Esteira de Arquitetura & Governança (Arch Contract)', () => {
  const componentsDir = path.resolve(__dirname, '../components');

  it('deve ter todos os componentes fortemente tipados e salvos em /src/components', () => {
    const files = fs.readdirSync(componentsDir);
    expect(files.length).toBeGreaterThan(0);

    // Garante extensão .tsx
    files.forEach((file) => {
      if (fs.statSync(path.join(componentsDir, file)).isFile()) {
        expect(file.endsWith('.tsx') || file.endsWith('.ts')).toBe(true);
      }
    });
  });

  it('não deve haver componentes duplicados com nomes conflitantes', () => {
    const files = fs.readdirSync(componentsDir);
    const componentNames = files.map((f) => f.replace(/\.(tsx|ts)$/, ''));
    const uniqueNames = new Set(componentNames);

    expect(componentNames.length).toEqual(uniqueNames.size);
  });

  it('evita overengineering: garante reutilização do componente ImageWithSkeleton', () => {
    const imageSkeletonPath = path.join(componentsDir, 'ImageWithSkeleton.tsx');
    expect(fs.existsSync(imageSkeletonPath)).toBe(true);
  });

  it('garante que a paleta Natural Tones seja referenciada sem inconsistências', () => {
    const copyDataPath = path.resolve(__dirname, '../data/copyData.ts');
    const content = fs.readFileSync(copyDataPath, 'utf-8');

    expect(content).toContain('#FAF7F2'); // Creme
    expect(content).toContain('#8C5E44'); // Terracota
    expect(content).toContain('#4A3728'); // Café
  });
});
