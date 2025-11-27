import { execSync } from 'node:child_process';
import path from 'node:path';

export function lintFile(filePath: string) {
  execSync(`eslint --fix "${filePath}"`, { stdio: 'inherit' });
  console.log(`✨ ESLint fix applied to ${filePath}`);
}

export function getPath(filePath: string) {
  return path.join(process.cwd(), filePath);
}
