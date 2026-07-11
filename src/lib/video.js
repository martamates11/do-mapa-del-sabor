// Acepta una URL de YouTube en cualquier formato habitual (watch?v=, youtu.be/,
// shorts/, embed/) o directamente el ID del vídeo, y devuelve la URL de embed
// en modo de privacidad reforzada (youtube-nocookie.com): no carga cookies de
// terceros hasta que el usuario le da al play.
export function embedYouTube(url) {
  const id = idDeYouTube(url);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

function idDeYouTube(entrada) {
  if (/^[\w-]{11}$/.test(entrada)) return entrada; // ya es un ID de 11 caracteres

  try {
    const u = new URL(entrada);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/')[2];
    if (u.pathname.startsWith('/embed/')) return u.pathname.split('/')[2];
    if (u.searchParams.has('v')) return u.searchParams.get('v');
  } catch {
    return null;
  }
  return null;
}
