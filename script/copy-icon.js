#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const sourcePath = path.join(process.cwd(), 'favicon.png');
const distPath = path.join(process.cwd(), 'dist', 'favicon.png');

// Copiar favicon.png a la carpeta dist
if (fs.existsSync(sourcePath)) {
  fs.copyFileSync(sourcePath, distPath);
  console.log('✅ favicon.png copiado a dist/');
} else {
  console.error('❌ No se encontró favicon.png en la raíz del proyecto');
}
