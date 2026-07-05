import { PRODUCTOS_INDEXADOS } from '../../data/productos-indexados.js';
import { conReferencia } from '../../lib/enlaces.js';
import { registrarClic } from '../../lib/contador.js';

export const prerender = false;

// Redirección propia (mismo dominio) en vez de enlazar directo a la tienda:
// así el clic se cuenta también para quien tiene bloqueador de anuncios,
// que suele impedir las peticiones de analítica de terceros pero no la
// navegación normal dentro del propio sitio.
export async function GET({ params, redirect }) {
  const producto = PRODUCTOS_INDEXADOS.find((p) => p.slug === params.slug);

  if (!producto || !producto.tienda_afiliada_url) {
    return redirect('/', 302);
  }

  await registrarClic(producto.slug);
  return redirect(conReferencia(producto.tienda_afiliada_url), 302);
}
