import { Redis } from '@upstash/redis';

// Admite tanto el nombrado de la integración "KV" (heredado) como el de
// "Upstash Redis" del Vercel Marketplace, según cuál se conecte al proyecto.
const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = url && token ? new Redis({ url, token }) : null;

const clave = (slug) => `clics:${slug}`;

export async function registrarClic(slug) {
  if (!redis) return; // sin base de datos conectada todavía: no bloquear la redirección
  try {
    await redis.incr(clave(slug));
  } catch {
    // un fallo al contar nunca debe impedir que el usuario llegue a la tienda
  }
}

export async function obtenerClics(slugs) {
  if (!redis) return {};
  try {
    const valores = await redis.mget(...slugs.map(clave));
    return Object.fromEntries(slugs.map((slug, i) => [slug, Number(valores[i]) || 0]));
  } catch {
    return {};
  }
}
