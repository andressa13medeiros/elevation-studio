import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Verifica se uma foto já existe em public/images durante o build.
 * Enquanto o arquivo não chega, o componente mostra o placeholder;
 * assim que a foto é salva na pasta, ela aparece sem mexer no código.
 */
export function hasPhoto(file: string): boolean {
  return existsSync(join(process.cwd(), 'public', 'images', file));
}

export function photoSrc(file: string): string {
  return `/images/${file}`;
}
