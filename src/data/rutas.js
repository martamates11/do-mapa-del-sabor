// Muestra curada de rutas gastronómicas de España por comunidad autónoma.
// A diferencia de los productos DOP/IGP (una única fuente: MAPA), las rutas
// vienen de organismos distintos según el tipo: las de vino están agrupadas
// bajo el sello "Rutas del Vino de España" de ACEVIN (acevin.es /
// wineroutesofspain.com), mientras que las de jamón/queso/aceite las
// gestiona cada comunidad autónoma o diputación por separado.
// PENDIENTE: cotejo del listado de vino contra el documento maestro de
// ACEVIN (su web bloqueó la descarga automatizada durante esta investigación,
// así que los nombres se han cruzado con varias fuentes secundarias fiables,
// no descargados literalmente de acevin.es). Sin ninguna ruta localizada
// todavía para Cantabria (06), Ceuta (18) y Melilla (19).

export const TIPOS_RUTA = {
  vino:   { icono: '🍷', nombre: 'Rutas del vino' },
  jamón:  { icono: '🥓', nombre: 'Rutas del jamón' },
  queso:  { icono: '🧀', nombre: 'Rutas del queso' },
  aceite: { icono: '🫒', nombre: 'Rutas del aceite' },
  otros:  { icono: '🍏', nombre: 'Otras rutas' },
};

export const RUTAS = [

  // ==================== VINO (ACEVIN – Rutas del Vino de España) ====================
  { n: 'Ruta del Vino Rioja Alta', tipo: 'vino', ccaa: ['17'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Recorre las bodegas históricas de La Rioja en torno a la D.O.Ca. Rioja.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Rioja Oriental', tipo: 'vino', ccaa: ['17'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta enoturística por la subzona oriental riojana, antigua Rioja Baja.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Rioja Alavesa', tipo: 'vino', ccaa: ['16'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Enoturismo en la subzona alavesa de la D.O.Ca. Rioja, con arquitectura de autor en sus bodegas.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Ribera del Duero', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Una de las rutas más reconocidas internacionalmente, por las bodegas de tinto de la D.O. Ribera del Duero.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Rueda', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta centrada en los blancos de verdejo de la D.O. Rueda, en Valladolid.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Cigales', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta vallisoletana especializada en los rosados tradicionales de la D.O. Cigales.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Toro', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta zamorana por las bodegas de tinta de toro de la D.O. Toro.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino El Bierzo', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Recorrido por las bodegas de mencía de la D.O. Bierzo, en León.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Arribes', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta entre Salamanca y Zamora, en los cañones del Duero fronterizos con Portugal.', enlace: 'https://wineroutesofspain.com/en/rv-arribes-en/' },
  { n: 'Ruta del Vino Arlanza', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta burgalesa-palentina por la joven D.O. Arlanza.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Sierra de Francia', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta salmantina que combina viñedo y paisaje serrano protegido.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino de Zamora', tipo: 'vino', ccaa: ['07'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta zamorana centrada en las denominaciones de la provincia fuera de Toro.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Somontano', tipo: 'vino', ccaa: ['02'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta oscense al pie del Pirineo, con bodegas de diseño contemporáneo.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Calatayud', tipo: 'vino', ccaa: ['02'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta zaragozana por viñedos viejos de garnacha en terrenos de gran altitud.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Campo de Cariñena', tipo: 'vino', ccaa: ['02'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta zaragozana en torno a la D.O. que da nombre a la variedad cariñena.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Garnacha (Campo de Borja)', tipo: 'vino', ccaa: ['02'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta aragonesa dedicada a la variedad garnacha en la D.O. Campo de Borja.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino de Navarra', tipo: 'vino', ccaa: ['15'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta navarra por bodegas de rosado y tinto de la D.O. Navarra.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Txakoli', tipo: 'vino', ccaa: ['16'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta vasca por los viñedos costeros de txakoli, incorporada más recientemente al club de producto.', enlace: 'https://acevin.es/ruta-del-txakoli-rutas-del-vino-de-espana' },
  { n: 'Ruta del Vino Penedès', tipo: 'vino', ccaa: ['09'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta catalana cuna del cava, con gran tradición vitivinícola desde el s. XIX.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino de Lleida – Costers del Segre', tipo: 'vino', ccaa: ['09'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta leridana por las siete subzonas de la D.O. Costers del Segre.', enlace: 'https://rutadelvidelleida.cat/es/ruta-del-vino-de-lleida/' },
  { n: 'Ruta del Vino Rías Baixas', tipo: 'vino', ccaa: ['12'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta gallega dedicada al albariño en las rías pontevedresas.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Ribeira Sacra', tipo: 'vino', ccaa: ['12'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta gallega por los viñedos en bancales sobre los cañones del Sil y el Miño.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Ribera del Guadiana', tipo: 'vino', ccaa: ['11'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta extremeña que incluye el único museo del cava de España, en Almendralejo.', enlace: 'https://www.rutadelvinoriberadelguadiana.com/en/inicio-english/' },
  { n: 'Ruta del Vino Marco de Jerez', tipo: 'vino', ccaa: ['01'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta gaditana por las bodegas de crianza de vinos generosos de Jerez.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Montilla-Moriles', tipo: 'vino', ccaa: ['01'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta cordobesa dedicada a los vinos de la variedad pedro ximénez.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Ronda-Málaga', tipo: 'vino', ccaa: ['01'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta malagueña por bodegas de montaña en torno a la sierra de Ronda.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino La Mancha', tipo: 'vino', ccaa: ['08'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'La ruta más extensa, repartida entre Ciudad Real, Toledo y Albacete.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Almansa', tipo: 'vino', ccaa: ['08'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta albaceteña en torno a la D.O. Almansa y su variedad garnacha tintorera.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino La Manchuela', tipo: 'vino', ccaa: ['08'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta entre Cuenca y Albacete que combina viñedo y patrimonio del Camino de Santiago.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Méntrida-Toledo', tipo: 'vino', ccaa: ['08'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta toledana próxima a Madrid, con fuerte presencia de la garnacha.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Valdepeñas', tipo: 'vino', ccaa: ['08'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta ciudadrealeña de larga tradición bodeguera y comercial del vino.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Jumilla', tipo: 'vino', ccaa: ['14', '08'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta a caballo entre Murcia y el sur de Albacete, dedicada a la monastrell.', enlace: 'https://rutadelvinojumilla.com/' },
  { n: 'Ruta del Vino Bullas', tipo: 'vino', ccaa: ['14'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta murciana centrada en los vinos de altitud de la D.O. Bullas.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Yecla', tipo: 'vino', ccaa: ['14'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta murciana dedicada a la monastrell de la D.O. Yecla.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Alicante', tipo: 'vino', ccaa: ['10'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta alicantina que incluye los caldos dulces de moscatel y el fondillón.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Utiel-Requena', tipo: 'vino', ccaa: ['10'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta valenciana dedicada a la variedad bobal en el interior de la provincia.', enlace: 'https://rutavino.com/es/acevin-rutas-del-vino-de-espanya.html' },
  { n: 'Ruta del Vino de Madrid', tipo: 'vino', ccaa: ['13'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta madrileña por los viñedos del sureste de la comunidad.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },
  { n: 'Ruta del Vino Gran Canaria', tipo: 'vino', ccaa: ['05'], organismo: 'ACEVIN – Ruta del Vino de España', d: 'Ruta canaria por viñedos volcánicos de la isla de Gran Canaria.', enlace: 'https://wineroutesofspain.com/en/wine-routes/' },

  // ==================== JAMÓN ====================
  { n: 'Ruta del Jabugo', tipo: 'jamón', ccaa: ['01'], organismo: 'Consejo Regulador DOP Jabugo', d: 'Recorrido por 31 municipios onubenses productores del jamón ibérico con DOP Jabugo, en la Sierra de Aracena y Picos de Aroche.', enlace: 'https://rutadeljabugo.travel/' },
  { n: 'Ruta del Jamón de Guijuelo', tipo: 'jamón', ccaa: ['07'], organismo: 'Asociación Ruta del Jamón de Guijuelo / DOP Guijuelo', d: 'Ruta salmantina centrada en el proceso del jamón ibérico con Denominación de Origen Guijuelo, la primera DOP de jamón en España.', enlace: 'https://www.rutajamondeguijuelo.com/' },
  { n: 'Ruta del Ibérico "Dehesa de Extremadura"', tipo: 'jamón', ccaa: ['11'], organismo: 'Junta de Extremadura – Dirección General de Turismo', d: 'Club de producto extremeño en torno al cerdo ibérico y la dehesa, sucesor de la antigua Ruta Nacional del Jamón Ibérico.', enlace: 'https://www.turismoextremadura.com/es/ven-a-extremadura/Ruta-del-Iberico/' },
  { n: 'Ruta del Jamón de la Alpujarra (Trevélez)', tipo: 'jamón', ccaa: ['01'], organismo: 'Turismo de Granada / IGP Jamón de Trevélez', d: 'Ruta granadina-almeriense que sigue el secado tradicional de jamón con IGP en pueblos de la Alpujarra como Trevélez.', enlace: 'https://alpujarraexperience.com/ruta-del-jamon-de-la-alpujarra/' },

  // ==================== QUESO ====================
  { n: 'Ruta del Queso de Extremadura', tipo: 'queso', ccaa: ['11'], organismo: 'Junta de Extremadura – Turismo, con Diputaciones de Cáceres y Badajoz', d: 'Itinerario que enlaza las cuatro DOP queseras extremeñas (Torta del Casar, La Serena, Ibores y Acehúche) con más de 140 establecimientos adheridos.', enlace: 'https://www.turismoextremadura.com/es/ven-a-extremadura/Ruta-del-Queso/' },
  { n: 'Ruta del Queso Idiazábal', tipo: 'queso', ccaa: ['16'], organismo: 'Diputación Foral de Gipuzkoa / DOP Idiazábal', d: 'Ruta de senderismo de 95,7 km en seis etapas por los valles guipuzcoanos donde pastorea la oveja latxa de la DOP Idiazábal (denominación que también se produce en Navarra).', enlace: 'https://www.rutadelquesoidiazabal.com/es/' },
  { n: 'Ruta del Queso Mahón-Menorca', tipo: 'queso', ccaa: ['04'], organismo: 'Consell Insular de Menorca / DOP Queso Mahón-Menorca', d: 'Recorrido por las queserías y explotaciones menorquinas del queso con DOP Mahón-Menorca, protegido desde 1985.', enlace: 'https://www.menorca.es/Publicacions/Publicacions.aspx?IDIOMA=3&tipo=RGQ' },
  { n: 'Ruta del Queso Manchego', tipo: 'queso', ccaa: ['08'], organismo: 'Turismo de Castilla-La Mancha', d: 'Conjunto de itinerarios por Albacete, Ciudad Real, Cuenca y Toledo que muestran la elaboración del queso manchego, con DOP desde 1992.', enlace: 'https://www.turismocastillalamancha.es/es/enogastronomia/el-queso-manchego-ciudad-real-toledo-cuenca' },

  // ==================== ACEITE ====================
  { n: 'Rutas del Aceite de Jaén', tipo: 'aceite', ccaa: ['01'], organismo: 'Diputación de Jaén / Centro de Interpretación Olivar y Aceite (Úbeda)', d: 'Programa anual de visitas a almazaras y olivares de las DOP jienenses (Sierra de Cazorla, Sierra de Segura, Sierra Mágina) e IGP Aceite de Jaén.', enlace: 'https://www.jaenparaisointerior.es/es/w/ix-rutas-del-aceite-de-jaen' },
  { n: 'Ruta del Aceite del Priorat (DOP Siurana)', tipo: 'aceite', ccaa: ['09'], organismo: 'Consell Comarcal / Turisme Priorat, DOP Siurana', d: 'Ruta cicloturística y de visitas a trulls (almazaras) tradicionales por los municipios productores del aceite con DOP Siurana en el Priorat y Baix Camp.', enlace: 'https://www.turismepriorat.org/en/priorat-olive-oil-trail' },

  // ==================== OTROS ====================
  { n: 'Ruta de la Sidra de Asturias (Comarca de la Sidra)', tipo: 'otros', ccaa: ['03'], organismo: 'Consejo Regulador DOP Sidra de Asturias / Turismo Asturias', d: 'Ruta por Villaviciosa, Colunga, Nava, Bimenes, Cabranes y Sariego siguiendo llagares y el Museo de la Sidra, producto con DOP desde 2002.', enlace: 'https://sidradeasturias.es/en/la-ruta-para-no-perderse-con-la-sidra/' },

];
