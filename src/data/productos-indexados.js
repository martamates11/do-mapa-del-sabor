// Añade un slug único a cada producto para poder generar una URL propia por ficha.
import { PRODUCTOS } from './productos.js';
import { slugify } from '../lib/slug.js';

const vistos = new Map();

export const PRODUCTOS_INDEXADOS = PRODUCTOS.map((p) => {
  const base = slugify(p.n);
  const repetido = vistos.get(base) || 0;
  vistos.set(base, repetido + 1);
  const slug = repetido === 0 ? base : `${base}-${repetido + 1}`;
  return { ...p, slug };
});
