// Añade un slug único a cada ruta para poder generar una URL propia por ficha.
import { RUTAS } from './rutas.js';
import { slugify } from '../lib/slug.js';

const vistos = new Map();

export const RUTAS_INDEXADAS = RUTAS.map((r) => {
  const base = slugify(r.n);
  const repetido = vistos.get(base) || 0;
  vistos.set(base, repetido + 1);
  const slug = repetido === 0 ? base : `${base}-${repetido + 1}`;
  return { ...r, slug };
});
