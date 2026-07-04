const REF = 'elmapadelsabor';

// Añade el parámetro de referencia a un enlace de tienda afiliada, para que
// el productor pueda identificar en su propia analítica el tráfico que le
// llega desde el proyecto — sin exigir ningún código ni descuento al cliente.
export function conReferencia(url) {
  const u = new URL(url);
  u.searchParams.set('ref', REF);
  return u.toString();
}
