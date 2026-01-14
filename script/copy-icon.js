#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const sourcePath = path.join(process.cwd(), 'A2.png');
const distPath = path.join(process.cwd(), 'dist', 'A2.png');

// Copiar A2.png a la carpeta dist
if (fs.existsSync(sourcePath)) {
  fs.copyFileSync(sourcePath, distPath);
  console.log('✅ A2.png copiado a dist/');
} else {
  console.error('❌ No se encontró A2.png en la raíz del proyecto');
}
