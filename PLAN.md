# D.O. El Mapa del Sabor — Plan de proyecto

## 1. Concepto

Aplicación web pedagógica: un mapa interactivo de España en el que, al
seleccionar una comunidad autónoma, se despliegan los productos con
Denominación de Origen Protegida (DOP), Indicación Geográfica Protegida (IGP)
o Especialidad Tradicional Garantizada (ETG) de esa región. Cada producto
tiene una ficha explicativa y, cuando exista convenio comercial, un enlace de
compra directa a tiendas asociadas. El vídeo explicativo del proceso de
elaboración se contempla como fase posterior, no en el MVP.

## 2. Fuente de datos

Ministerio de Agricultura, Pesca y Alimentación (MAPA):
`https://www.mapa.gob.es/es/alimentacion/temas/calidad-diferenciada/dop-igp`

- Dataset a diciembre de 2025: **393 indicaciones geográficas** — 216 DOP +
  174 IGP + 3 ETG.
- Publicado como **PDFs**, no como API/dataset estructurado:
  - Listado general por CCAA (`04_igs_por_ccaa.pdf`)
  - Listados por categoría de producto (vinos `02_vinos.pdf`, quesos, etc.)
- El sitio bloquea peticiones automatizadas (403 a fetchers), así que la
  descarga y conversión inicial de los PDF a datos estructurados debe hacerse
  manualmente (o semi-manualmente, con un script de scraping/parsing de PDF
  ejecutado localmente por una persona, no desde este entorno).
- Los datos habrá que revisarlos periódicamente: el Ministerio da de alta y
  de baja denominaciones con cierta frecuencia.

## 3. Decisiones de producto ya tomadas

| Decisión | Resultado |
|---|---|
| Repositorio | Repo nuevo e independiente: `martamates11/do-mapa-del-sabor` (ya creado, desplegado en Vercel) |
| Vídeo pedagógico en el MVP | **No** — se añade en una fase posterior |
| Alcance de datos del MVP | **Completo**: los 393 productos desde el inicio, aunque muchas fichas empiecen con contenido mínimo |

## 4. Funcionalidades

| Módulo | MVP | Fase posterior |
|---|---|---|
| Mapa dinámico de España por CCAA | Sí | — |
| Ficha de producto (nombre, tipo, CCAA, categoría DOP/IGP/ETG, descripción) | Sí | Enriquecer contenido progresivamente |
| Buscador/filtro (por tipo, por región) | Sí | Filtro "con vídeo" / "disponible para comprar" |
| Vídeo del proceso de elaboración | No | Sí, empezando por 10-20 productos estrella |
| Enlaces de compra directa (afiliación con tiendas) | No | Sí, según convenios comerciales cerrados |
| Rutas gastronómicas / turismo | No | Fase de escalado |

## 5. Modelo de datos propuesto (borrador)

```
Producto
├── id
├── nombre
├── tipo_indicacion        # DOP | IGP | ETG
├── categoria_producto     # queso, vino, aceite, carne, miel, fruta_hortaliza, ...
├── ccaa                   # comunidad autónoma
├── descripcion
├── anio_reconocimiento
├── video_url              # null en MVP
├── tienda_afiliada_url    # null hasta que haya convenio
└── estado_convenio        # sin_contactar | en_negociacion | acuerdo_cerrado
```

`ccaa` como clave de filtrado principal del mapa; `categoria_producto` como
filtro secundario.

## 6. Fases

**Fase 0 — Fundaciones**
- Crear el repositorio definitivo del proyecto.
- Descargar y transcribir manualmente los PDF del MAPA a un dataset limpio
  (CSV/JSON) con los 393 productos.
- Definir stack técnico definitivo (mapa interactivo tipo Leaflet/Mapbox +
  frontend ligero; dado que ya se usa Leaflet en otro proyecto del mismo
  equipo, es una opción natural por familiaridad).

**Fase 1 — MVP**
- Mapa interactivo por CCAA + listado de productos.
- Fichas de producto con los 393 registros (contenido mínimo: nombre, tipo,
  categoría, CCAA, descripción breve).
- Sin vídeo, sin tienda todavía.

**Fase 2 — Contenido pedagógico (vídeo)**
- Selección/producción de vídeo para productos prioritarios.
- Gestión de permisos si se usan vídeos de terceros (consejos reguladores,
  cooperativas): no basta con que el vídeo esté en YouTube, hace falta
  autorización de reutilización/embed.

**Fase 3 — Comercial (en paralelo a Fase 2, y cuanto antes mejor)**
- Contactar tiendas y consejos reguladores para convenios de venta/afiliación.
- Es trabajo de negociación humana, no de desarrollo: es el cuello de botella
  más probable del proyecto y conviene arrancarlo ya, en paralelo al MVP.

**Fase 4 — Activación comercial**
- Añadir enlaces de compra solo a los productos con convenio cerrado.

**Fase 5 — Escalado**
- Rutas turísticas, newsletter, posible app móvil.

## 7. Riesgos e inconvenientes

1. **Dato no estructurado (PDF)**: conversión inicial manual, sin atajo fiable
   automatizado.
2. **Nombres y sellos DOP/IGP protegidos**: se puede informar sobre ellos,
   pero no se puede usar el logotipo oficial ni sugerir aval institucional sin
   autorización del consejo regulador correspondiente. Revisar con asesoría
   antes de publicar.
3. **Derechos de vídeo de terceros**: necesitan permiso explícito de
   reutilización, no solo estar publicados en abierto.
4. **Convenios comerciales**: cuello de botella real del proyecto; no depende
   del desarrollo técnico.
5. **Mantenimiento del dato**: altas/bajas periódicas de DOP/IGP en el
   Ministerio: hace falta un proceso de revisión, no es "cargar una vez y
   olvidar".
6. **Alcance completo desde el MVP**: cargar los 393 productos de golpe
   significa que muchas fichas estarán vacías de contenido al principio;
   asumir que la fase de enriquecimiento de contenido será larga.

## 8. Próximos pasos concretos

1. Crear el repositorio nuevo del proyecto.
2. Descargar y transcribir los PDF del MAPA (`04_igs_por_ccaa.pdf` y los
   listados por categoría) a un dataset estructurado.
3. Empezar en paralelo el contacto con consejos reguladores/tiendas para
   convenios comerciales (Fase 3), dado que es lo que más tiempo tardará.
4. Con el dataset listo, arrancar el desarrollo del MVP (Fase 1).

## 9. Objetivo a largo plazo: tráfico internacional y monetización

Si el objetivo final no es solo un proyecto pedagógico sino una web con
tráfico internacional relevante que genere ventas reales, esto añade una
capa de trabajo sobre las fases de la sección 6.

### 9.1 SEO técnico (condición previa a cualquier tráfico)
- Cada producto necesita URL propia indexable por buscadores — **ya
  implementado**: el sitio se migró de Vite vanilla a Astro con generación
  estática, una página por producto (`/productos/[slug]`) con metadatos y
  `schema.org/Product`, y sitemap automático.
- Pendiente: contenido enriquecido por producto (hoy las fichas tienen
  descripción mínima), que es lo que realmente posiciona en buscadores de
  cola larga.

### 9.2 Internacionalización
- Decidir la estructura de idiomas (`/es/`, `/en/`, ...) antes de escalar el
  dataset a los 393 productos, para no reescribir rutas y contenido dos veces.
- Traducir contenido real, no solo la interfaz.
- Adaptar pagos/envíos internacionales si en algún momento hay tienda propia
  (o dejarlo del lado de las tiendas afiliadas).

### 9.3 Tráfico
- SEO de contenido: blog, guías regionales, rutas gastronómicas — contenido
  que la gente busca y comparte.
- Distribución: redes sociales, partnerships con turismo/gastronomía, prensa
  especializada.
- El tráfico orgánico tarda meses en madurar; no depende solo del desarrollo.

### 9.4 Monetización (en paralelo, cuanto antes — ver Fase 3 y riesgo 4)
- Convenios de afiliación/venta directa con consejos reguladores y tiendas,
  empezando por 10-20 productos "estrella".
- Modelo de ingresos mixto a futuro: afiliación + posible publicidad +
  newsletter/membership.

### 9.5 Bloqueos legales a resolver antes de escalar (ver también sección 7)
- Uso de sellos DOP/IGP oficiales: requiere autorización del consejo
  regulador correspondiente.
- Normativa de comercio electrónico y protección de datos distinta por país
  si se opera internacionalmente (IVA, GDPR/CCPA...).

**Orden recomendado**: completar el dataset (Fase 0) en paralelo a iniciar
las conversaciones comerciales (Fase 3) — son las dos tareas de mayor
duración y no dependen la una de la otra. El SEO y la captación de tráfico
no tienen sentido hasta que el contenido esté completo e indexable.

## 10. Piloto Extremadura: vídeo y proveedores

Extremadura es la comunidad elegida para arrancar en la práctica las Fases 2
(vídeo) y 3 (comercial) de la sección 6, con sus 12 productos ya cargados en
el dataset como banco de pruebas antes de escalar al resto de comunidades.

### 10.1 Directorio de Consejos Reguladores

Un Consejo Regulador cubre a todos los productores de su DOP/IGP de golpe,
así que es el interlocutor prioritario frente a productores individuales.
Contactos localizados (verificar vigencia antes de escribir, la información
puede quedar desactualizada):

| Producto | Consejo Regulador | Email | Teléfono | Web |
|---|---|---|---|---|
| Torta del Casar | DOP Torta del Casar | info@tortadelcasar.eu | 927 29 07 13 | tortadelcasar.eu |
| Queso de la Serena | DOP Queso de la Serena | info@quesoserena.com | 924 77 21 14 | quesoserena.com |
| Queso Ibores | DOP Queso Ibores | quesoibores@quesoibores.org | 927 32 30 76 | quesoibores.org |
| Dehesa de Extremadura | DOP Dehesa de Extremadura | info@dehesa-extremadura.com | 924 33 02 03 | dehesa-extremadura.com |
| Ternera de Extremadura | IGP Ternera de Extremadura | consejoregulador@terneradeextremadura.org | 927 62 91 46 | terneradeextremadura.org |
| Cordero de Extremadura | IGP Cordero de Extremadura (Corderex) | corderex@corderex.com | 924 31 03 06 | corderex.com |
| Pimentón de la Vera | DOP Pimentón de la Vera | info@pimentonvera-origen.com | 927 17 02 72 | pimentonvera-origen.com |
| Aceite Gata-Hurdes | DOP Gata-Hurdes | gatahurdes@gmail.com | 927 41 70 91 | dopgatahurdes.com |
| Aceite Monterrubio | DOP Aceite Monterrubio | info@aceitemonterrubiodop.com | 924 63 53 71 | aceitemonterrubiodop.com |
| Miel Villuercas-Ibores | DOP Miel Villuercas-Ibores | crdomielvilluercasibores@gmail.com | 927 36 93 48 | mielvilluercasibores.eu |
| Cereza del Jerte | DOP Cereza del Jerte | picota@cerezadeljerte.org | 927 47 11 01 | cerezadeljerte.org |
| Ribera del Guadiana | DOP Ribera del Guadiana | info@riberadelguadiana.eu | 924 67 13 02 | riberadelguadiana.eu |

### 10.2 Orden de contacto

No escribir a los 12 a la vez. Empezar por los 3 con más actividad digital
propia (web cuidada, redes sociales activas), que son los que más
probabilidad de respuesta rápida tienen:
1. Cereza del Jerte
2. Torta del Casar
3. Dehesa de Extremadura

Aprender del primer intercambio (qué piden ellos, qué dudas tienen) antes de
escalar el envío a los otros 9.

### 10.3 Un único email cubre vídeo y convenio comercial a la vez

No conviene separar en dos correos. La plantilla de primer contacto debe:
- Presentar el proyecto con el enlace a la web ya publicada (prueba social).
- Pedir material que ya exista (fotos, vídeo institucional) con permiso de
  uso explícito — así se resuelve la Fase 2 sin coste de producción.
- Plantear la posibilidad de visibilidad + futura afiliación comercial, sin
  comprometerse a nada todavía — abre la puerta a la Fase 3.

**Plantilla:**

> Asunto: Colaboración con "El Mapa del Sabor" — proyecto sobre las
> denominaciones de origen de España
>
> Estimado Consejo Regulador de [PRODUCTO]:
>
> Me pongo en contacto desde "El Mapa del Sabor"
> (do-mapa-del-sabor.vercel.app), un proyecto que recoge en un mapa
> interactivo los productos españoles con Denominación de Origen Protegida,
> Indicación Geográfica Protegida y Especialidad Tradicional Garantizada,
> región a región. [PRODUCTO] ya tiene su propia ficha en el proyecto:
> [ENLACE A LA FICHA].
>
> Escribo por dos motivos:
>
> 1. Nos gustaría poder mostrar en la ficha el proceso de elaboración de
>    [PRODUCTO]. Si el Consejo Regulador dispone de fotografías o vídeo
>    institucional, ¿sería posible obtener autorización para usarlo en la
>    ficha, citando siempre la fuente?
> 2. A medio plazo, el proyecto contempla añadir enlaces de compra directa a
>    tiendas de los productores con convenio. Si os interesa explorar esta
>    posibilidad más adelante, encantados de mantener una conversación,
>    sin ningún compromiso por ahora.
>
> Quedamos a la espera de vuestra respuesta y de la persona de contacto más
> adecuada para seguir esta conversación.
>
> Un cordial saludo,
> [NOMBRE]

### 10.4 Seguimiento

Antes del primer envío, crear una hoja de cálculo con columnas: Producto ·
Contactado (fecha) · Respuesta · Material recibido · Estado convenio
(sin_contactar / en_negociación / acuerdo_cerrado, igual que el campo
`estado_convenio` del modelo de datos de la sección 5).

### 10.5 Sin presupuesto de vídeo propio

No producir contenido propio en esta fase. El objetivo inicial es conseguir
que algún Consejo Regulador ceda material ya existente. Si en 3-4 semanas
ninguno responde con material, es el momento de valorar alternativas
(colaboración con un ciclo de audiovisuales, ayuntamientos, etc.) — no antes.

### 10.6 Modelo de comisión y cómo se atribuye una venta

**Modelo elegido**: comisión sobre venta realizada (5-15% según categoría),
no cuota fija mensual ni pago por visita — es lo único que no supone riesgo
para el productor en un primer contacto en frío, y es coherente con
ofrecerle visibilidad gratuita desde el principio (ver 10.3).

**Cómo se identifica que una venta viene de aquí** — de menos a más fiable:

1. **Enlace con parámetro de referencia (implementado)**: cada enlace de
   "comprar" añade automáticamente `?ref=elmapadelsabor` a la URL de la
   tienda, sin que el cliente tenga que hacer ni escribir nada. Así el
   productor puede identificar el tráfico en su propia analítica (Google
   Analytics o similar). Ver `src/lib/enlaces.js` (función `conReferencia`),
   aplicada desde `src/pages/salida/[slug].js` — se activa en cuanto el
   producto tiene `tienda_afiliada_url` en el dataset; hasta entonces sigue
   mostrando el aviso "en preparación".
2. **Código de referencia manual** (sin descuento asociado, para no apilar
   descuento + comisión): opción de respaldo si el productor no tiene
   analítica web, para que pueda identificar el pedido a mano.
3. **Límite conocido**: ambas opciones dependen de que el productor consulte
   y comunique el dato — no hay verificación automática de la venta en sí.
   Eliminarlo del todo exigiría una red de afiliación con píxel de
   conversión (necesita capacidad técnica del productor) o pasar el pago por
   una plataforma propia tipo marketplace (Stripe Connect) — ninguna de las
   dos es realista en la fase de piloto con productores artesanales
   pequeños; revisar solo si algún productor concreto empieza a mover
   volumen relevante.

### 10.7 Contador propio de clics (implementado)

Además de lo que registre la analítica del productor, el proyecto lleva su
propio contador de clics en el botón "Comprar en la tienda oficial", **más
fiable que un contador basado en JavaScript de cliente** (tipo Google
Analytics) porque un bloqueador de anuncios no impide una navegación normal
dentro del propio dominio, solo las peticiones de scripts de analítica de
terceros.

**Cómo funciona**: el botón de compra ya no enlaza directo a la tienda, sino
a `/salida/[slug]` (`src/pages/salida/[slug].js`), una ruta de servidor
(`prerender = false`, el resto del sitio sigue siendo 100% estático) que
incrementa un contador y redirige (302) a la tienda con la referencia ya
añadida. El contador se guarda en Redis (Upstash) a través de
`src/lib/contador.js` — si esa base de datos no está conectada todavía, la
redirección funciona igual, simplemente sin contar (no bloquea nunca al
usuario).

**Pendiente de configurar en Vercel** (proyecto `do-mapa-del-sabor`):
1. Conectar una base de datos Redis desde el Marketplace de Vercel
   (Storage → Create Database → Redis/Upstash). Al conectarla, Vercel añade
   automáticamente las variables de entorno que lee `contador.js`
   (`KV_REST_API_URL` / `KV_REST_API_TOKEN`, o el nombrado `UPSTASH_REDIS_REST_*`
   según la integración).
2. Añadir una variable de entorno `CLAVE_ADMIN` (a elegir, no debe ser
   pública) para poder consultar el panel de resultados.

**Consulta de resultados**: `/admin/clics?clave=LA_CLAVE_ELEGIDA` — tabla con
el número de clics por producto, ordenada de más a menos. Sin la clave
correcta, la página no muestra ningún dato.

### 10.8 Vídeo del proceso de elaboración (implementado)

**Decisión**: vídeo incrustado de YouTube (modo de privacidad reforzada,
dominio `youtube-nocookie.com`), no un simple enlace que saque de la ficha.
Motivos: cero coste de alojamiento/ancho de banda (a diferencia de servir
vídeo propio, inviable en Vercel para archivos pesados), y si un Consejo
Regulador cede vídeo institucional lo más probable es que ya esté publicado
en su propio canal de YouTube — en ese caso solo hace falta embeberlo, sin
subir nada. Si en cambio ceden un archivo en bruto sin publicar, subirlo a
un canal de YouTube propio del proyecto es la vía más simple.

**Cómo funciona**: en cuanto un producto tiene `video_url` en el dataset
(admite watch?v=, youtu.be/, shorts/ o el ID directo — ver
`src/lib/video.js`), la ficha muestra el reproductor embebido en vez del
aviso "próximamente". El modo `youtube-nocookie.com` evita cargar cookies de
terceros hasta que el usuario le da al play, lo que simplifica el futuro
aviso de cookies de la web (pendiente, ver riesgo de la LSSI-CE mencionado
al hablar del aviso legal).

## 11. Mapa como elemento principal (implementado)

Rediseño de la página de inicio para que el mapa sea el centro visual, con
interactividad enriquecida en el hover.

- **Tarjetas de estadísticas reducidas**: el bloque de "206 productos / DOP /
  IGP / ETG / comunidades" pasa a un tamaño mucho más pequeño (padding y
  tipografía reducidos a ~30-40% del original) para restar protagonismo
  frente al mapa.
- **Mapa más grande**: la proporción de la rejilla `explorer` pasa de
  `1.5fr/1fr` a `2.3fr/0.9fr` (mapa/panel), agrandando el mapa de forma
  proporcional al ser todo el layout responsivo (`viewBox` + `width:100%`).
- **Región ampliada y en color llamativo al pasar el ratón**: cada región
  escala ligeramente (`transform: scale(1.08)`) y cambia a color dorado con
  resplandor, usando como `transform-origin` su propio centroide, ya
  calculado por `tools/build-map.mjs` en `mapa-ccaa.js`. La región hover se
  trae al frente del resto (`appendChild` la reordena en el SVG) para que no
  quede tapada por sus vecinas. Esto y la tarjeta de datos (siguiente punto)
  aparecen **al instante**.
- **Categorías de la región, con un pequeño retraso**: la tarjeta anclada al
  centroide de la región, en vez de listar cada producto, agrupa por
  categoría (quesos, vinos, aceites…) con el nº de productos de cada una,
  ordenadas de mayor a menor — solo se abre si el ratón se queda quieto
  sobre la misma región durante 900ms; cualquier movimiento (incluso dentro
  de la propia región) reinicia la cuenta atrás. Evita que la tarjeta
  parpadee al simplemente cruzar el mapa. Ver `activarRegionHover()` /
  `mostrarProductosFlotantes()` en `src/pages/index.astro`.
- **Tarjeta de datos arriba a la izquierda**: nombre de la comunidad,
  extensión (km²), altitud de la capital, clima y temperaturas máx./mín.
  orientativas. Fuente: `src/data/datos-ccaa.js` — **valores aproximados de
  cultura general geográfica, no cifras oficiales verificadas al detalle**;
  si se necesita precisión (por ejemplo, para publicarlo como dato
  "oficial"), contrastar con AEMET/INE antes de darlo por bueno.
- Sustituye por completo el tooltip pequeño anterior (nombre + nº de
  productos siguiendo al ratón), que quedaba redundante con esta información
  más rica.

**Corrección para móvil**: el hover (agrandar región, tarjetas flotantes)
solo tiene sentido con ratón/trackpad. En pantallas táctiles, al tocar y
deslizar el dedo por el mapa, el efecto se quedaba "pegado" en la última
región tocada (sin forma de "salir" con el dedo como se hace apartando el
ratón), y además el navegador aplicaba su resalte azul nativo de toque.
Solución:
- `src/pages/index.astro`: el listener de `pointermove` que activa el hover
  ignora los eventos con `pointerType === 'touch'` — en pantallas táctiles
  solo queda el toque para seleccionar región (comportamiento ya existente,
  sin cambios).
- `src/style.css`: `-webkit-tap-highlight-color: transparent` en `.ccaa`
  para quitar el resalte azul nativo, y la regla `:hover` (antes aplicada
  siempre) queda dentro de `@media (hover: hover) and (pointer: fine)`, para
  que ningún estado de solo-hover pueda quedar pegado tras un toque.
Verificado con Playwright emulando un dispositivo táctil: con
`pointerType: touch` la región no se agranda ni cambia de color; con
`pointerType: mouse` sigue haciéndolo igual que antes; el toque para
seleccionar región sigue abriendo el panel correctamente.

**Segunda vuelta (el problema seguía ocurriendo)**: lo anterior no era la
causa real de "se selecciona en azul todo el mapa" en móvil — eso es la
**selección nativa de contenido/imagen** del navegador (el mismo mecanismo
por el que se selecciona texto arrastrando el dedo, o el recuadro azul de
"guardar imagen" al mantener pulsado), que ni el hover ni el
`tap-highlight-color` controlan. El SVG del mapa no tenía `user-select`
desactivado, así que arrastrar el dedo sobre él lo seleccionaba como
objeto completo. Corregido en `#mapa` y `.map-wrap` con `user-select: none`,
`-webkit-touch-callout: none` (evita el recuadro de selección/menú
contextual de iOS) y `-webkit-user-drag: none`; además `touch-action: pan-y
pinch-zoom` en el SVG, para permitir seguir haciendo scroll vertical y
zoom con dos dedos sin que el navegador interprete el gesto como selección.

**Tercera vuelta (seguía sin resolverse)**: Safari/Chrome móvil tienen un
fallo conocido por el que el resalte de toque de un SVG interactivo se
renderiza sobre el contenedor HTML que lo envuelve, no sobre el propio SVG
— así que las propiedades puestas solo en `#mapa`/`.map-wrap` pueden no
bastar. Se refuerzan también `.map-card` (la tarjeta completa) y `.ccaa`
(cada región individual) con las mismas propiedades
(`user-select`/`-webkit-touch-callout`/`-webkit-tap-highlight-color`), para
no dejar ningún nivel del árbol sin cubrir.

**Cuarta vuelta (diagnóstico correcto gracias a una captura en iPhone)**:
la captura mostró el menú nativo de iOS "Copiar / Buscar / Consultar" — el
menú de **selección de texto**, no el de "guardar imagen". El gesto de
arrastre probablemente empezaba sobre el texto de un chip de filtro y se
extendía hacia el mapa; iOS pinta de azul todo el rectángulo de la
selección, aunque "por debajo" pase por encima de la zona del mapa. Las
correcciones anteriores (limitadas a `.map-card`/`.ccaa`) no cubrían este
caso porque el origen de la selección no era el mapa en sí.

**Solución definitiva**: desactivar la selección de texto en toda la
página (`body { user-select: none; -webkit-touch-callout: none; }`), con
excepción explícita para `input`/`textarea` (el buscador sigue
seleccionando/escribiendo con normalidad). Es un patrón habitual en sitios
interactivos tipo aplicación (mapa, chips, botones) frente a páginas de
lectura de texto largo. Verificado simulando exactamente el gesto del
fallo (arrastre desde un chip de filtro hasta el mapa): ya no se selecciona
nada, y el buscador sigue funcionando.

**Quinta vuelta (seguía igual, con segunda captura idéntica)**: investigado
el problema — es un **fallo conocido y confirmado de WebKit** (reportado en
los foros oficiales de Apple Developer, iOS 15 en adelante e incluso
versiones muy recientes): `-webkit-touch-callout: none` deja de respetarse
de forma fiable en iOS reciente, aparentemente por interferencia de **Live
Text** (la función de iOS que analiza el contenido visual al mantener
pulsado), que tiene su propia gestión del gesto y puede saltarse esa CSS.
Fuente: [Apple Developer Forums — "webkit-touch-callout: none; not working
in Safari"](https://developer.apple.com/forums/thread/808606).

Según la misma investigación, aunque la CSS falle, **el gesto de mantener
pulsado sigue disparando el evento `contextmenu` en JavaScript**, así que se
añade una última red de seguridad que no depende de que el navegador
respete la propiedad CSS:
```js
document.addEventListener('contextmenu', (e) => e.preventDefault());
```
Verificado que cancela el evento correctamente y que el clic para
seleccionar región sigue funcionando sin cambios.

**Si esto tampoco lo resuelve del todo**: sería indicio de que es
literalmente la función de sistema de iOS (Live Text / "Visual Look Up"),
que puede operar por debajo del navegador sobre cualquier contenido en
pantalla — en ese caso no habría forma de desactivarlo desde el código de
la web, y la comprobación sería: Ajustes de iPhone → General → Idioma y
región → desactivar "Texto en vivo" (o similar, el nombre exacto varía por
versión de iOS), para confirmar el diagnóstico.

**Sexta vuelta**: la profesora desactivó "Texto en vivo" en Ajustes y el
problema persistió igual — **descarta a Live Text como causa**, ya que si
fuera una función de sistema, desactivarla habría cambiado algo. Importante
matiz: en el momento de esa prueba, el arreglo del `contextmenu` (quinta
vuelta) **todavía no estaba desplegado**, así que de hecho no se había
probado en un dispositivo real todavía.

**Séptima vuelta (el `contextmenu` desplegado tampoco bastó)**: confirmado
que ni la CSS ni la intercepción de `contextmenu` cubren el mecanismo real
que lo dispara en el dispositivo de la profesora. Cambio de enfoque: en vez
de seguir intentando evitar la selección con más CSS/eventos, se quita el
SVG como objetivo táctil directo. Se añade `#toqueMapa`, una capa
transparente superpuesta al mapa, **activada solo en dispositivos táctiles**
(`matchMedia('(hover: none) and (pointer: coarse)')`) — en escritorio
permanece con `pointer-events: none` y no afecta a nada. En el toque, el
dedo nunca posa sobre contenido de texto/imagen del SVG (un `<div>` vacío
no le ofrece nada a iOS para seleccionar o analizar); la propia capa hace
de "gestor de toques": mide el desplazamiento entre `touchstart` y
`touchend` para distinguir un toque de un arrastre/scroll, y si es un
toque, localiza la región con `document.elementFromPoint()` (desactivando
momentáneamente sus propios `pointer-events` para poder "ver" el SVG
debajo) y llama a `activarRegion()` directamente — sin pasar nunca por el
`click` nativo del SVG. También se añade `selectstart` a la lista de
eventos interceptados, como red adicional.

Verificado con Playwright: en un contexto táctil la capa se activa y el
toque selecciona la región correctamente sin seleccionar texto; en
escritorio la capa permanece inactiva y el hover/clic de ratón siguen
funcionando exactamente igual que antes.

**Octava vuelta**: dos ajustes tras seguir viendo el problema en tablet y
pedir que el toque abra también las dos tarjetas (antes solo lo hacía el
ratón):
1. **Detección táctil más robusta**: el iPad (y algunos Android en modo
   "escritorio") puede reportar `pointer: fine` / `hover: hover` aunque no
   haya ratón conectado — es la conocida "pretensión de escritorio" de
   iPadOS Safari. Por eso `esTactil` ya no depende solo de `matchMedia`:
   ahora también comprueba `'ontouchstart' in window` y
   `navigator.maxTouchPoints > 0`, así la capa `#toqueMapa` se activa igual
   en esos casos. Verificado simulando ese escenario exacto con Playwright
   (forzando `matchMedia` a devolver `hover:hover` mientras el contexto
   tiene capacidad táctil): la capa se activa correctamente gracias al
   respaldo de `maxTouchPoints`.
2. **El toque abre las dos tarjetas**: antes, tocar una región en móvil
   solo actualizaba el panel inferior (la capa llamaba a `activarRegion()`,
   nunca a `activarRegionHover()`/`mostrarProductosFlotantes()`). Ahora el
   toque llama a las tres, mostrando la tarjeta de datos y la de productos
   al instante (sin el retraso de 900ms del hover de ratón — un toque ya es
   una acción deliberada, no hace falta esperar a ver si el usuario "se
   queda quieto"). Además, `activarRegion()` admite ahora un segundo
   parámetro `{ desplazar: false }` para que, al venir de un toque, no
   salte automáticamente al panel inferior — si no, ese salto taparía las
   tarjetas recién abiertas.

**Novena vuelta**: las dos tarjetas podían solaparse (la de productos
seguía anclada al centroide de la región tocada, así que según qué región
podía caer justo encima de la tarjeta de datos, fija arriba a la
izquierda). Cambios:
- **Posiciones fijas**: `.productos-flotantes` deja de seguir a la región
  y pasa a fijarse arriba a la derecha (`.info-region` ya estaba arriba a
  la izquierda) — ya no dependen de qué región se ha tocado, así que nunca
  pueden solaparse por posición. Se elimina `posicionEnMapa()` y el cálculo
  de coordenadas en pantalla, que ya no hacían falta.
- **Ancho responsivo**: aun así, en pantallas muy estrechas dos tarjetas de
  ancho fijo (220px/200px) podían juntarse y solaparse. Se cambia a
  `max-width: min(220px, calc(50% - 1.1rem))` (y equivalente en la otra),
  para que cada una nunca ocupe más de la mitad del ancho disponible.
  Verificado que, tras este cambio, sus rectángulos ya no se cruzan en un
  iPhone 13 emulado.
- **Cierra al tocar fuera**: nueva función `cerrarTarjetasTactiles()` —
  oculta ambas tarjetas, quita el resaltado de la región y deselecciona
  (vuelve el mapa a su estado neutro). Se llama en dos casos: al tocar
  dentro del mapa pero fuera de cualquier región (el mar, el marco), y al
  tocar en cualquier parte de la página fuera de `.map-wrap` mientras había
  una región activa (listener de `touchstart` en `document`).

Verificado con Playwright (contexto táctil): tras tocar una región, tocar
el mar cierra las tarjetas; tras reabrir, tocar fuera del mapa (la
cabecera) también las cierra. Confirmado con captura que ambas tarjetas se
ven completas y sin solape, tanto en móvil como en escritorio.

## 12. El mapa como prioridad absoluta en móvil (implementado)

Dado que el uso previsto de la aplicación es mayoritariamente desde el
móvil, se reordena la página en el media query móvil (`max-width: 940px`)
para acercar el mapa lo máximo posible sin perder el contexto inicial.

**Cómo**: `main` pasa a `display:flex; flex-direction:column`, con orden
explícito: `.hero` (título + introducción + estadísticas) primero — da
contexto sin apenas ocupar espacio —, `.explorer` (mapa + panel) segundo, y
`.filters` (chips de categoría + buscador, la sección más alta de las
tres) el último, debajo del mapa. El orden en el HTML no cambia, solo el
visual (no afecta a lectores de pantalla ni a SEO).

Verificado con Playwright (viewport de móvil): el mapa queda dentro del
área visible nada más cargar la página, sin hacer scroll, y el clic para
seleccionar región sigue funcionando exactamente igual.

## 13. Tres modos del mapa: productos / restaurantes / rutas (implementado)

Además de las denominaciones de origen, el mapa ahora tiene un selector de
tres modos (encima del mapa, estilo segmented control): **Denominaciones
de origen** (el original), **Restaurantes con estrella** (Guía Michelin) y
**Rutas gastronómicas** (vino, jamón, queso, aceite...). Los tres
comparten un único mapa, un único sistema de hover/toque y un único panel
lateral — no se ha duplicado nada de la arquitectura táctil ya depurada en
las secciones 11 y 12.

### 13.1 Origen de los datos nuevos

Investigados por dos subagentes de Claude en paralelo (búsqueda web, sin
tocar código), igual que se hizo en su día con los productos DOP/IGP:

- **`src/data/restaurantes.js`** (60 restaurantes, 17 de 19 CCAA): edición
  2026 de la Guía Michelin España (gala de noviembre de 2025). Contrastados
  con más cuidado los de 2 y 3 estrellas (listas cerradas, fáciles de
  verificar); el bloque de 1 estrella de Aragón y Castilla y León se apoya
  en prensa regional y debe tratarse como muestra representativa, no
  definitiva. **Pendiente**: Ceuta y Melilla, sin ningún restaurante
  localizado con distinción. No incluye Bib Gourmand: se quitó del filtro
  de distinciones (`DISTINCIONES`) por no haber ningún restaurante con esa
  categoría en el dataset — un filtro sin ningún resultado posible no
  aporta nada. Solo se guardan datos objetivos (nombre, ubicación, distinción,
  tipo de cocina, descripción breve redactada por el asistente) y un enlace
  a la ficha oficial de Michelin cuando se ha localizado — nunca se
  reproduce el texto editorial de la guía, por ser contenido protegido.
- **`src/data/rutas.js`** (49 rutas: 38 vino, 4 jamón, 4 queso, 2 aceite, 1
  otras): las de vino vienen del sello ACEVIN "Rutas del Vino de España"
  (acevin.es / wineroutesofspain.com dieron error 403 al scraping directo,
  así que los nombres están cruzados con varias fuentes secundarias, no
  descargados literalmente del listado maestro). Las de jamón/queso/aceite
  están verificadas contra la web propia de cada ruta. **Pendiente**:
  Cantabria, Ceuta y Melilla sin ninguna ruta localizada.

Ambos ficheros siguen la misma convención que `productos.js`: cabecera con
la fuente y las salvedades, comentario de "muestra curada, pendiente de
cotejo" cuando aplica, y un fichero `-indexadas.js` hermano que añade el
`slug` (mismo `slugify()` que ya se usaba).

#### Fuentes consultadas (para la próxima revisión anual)

Restaurantes con estrella (Guía Michelin):
- https://guide.michelin.com/es/es — buscador oficial, filtrar por España; cada `enlace` del dataset apunta a la ficha concreta cuando se localizó.
- Prensa especializada de la gala anual (suele celebrarse en noviembre): Hosteltur, El País Gastronomía, ABC, La Vanguardia — útiles para detectar altas/bajas de la edición nueva antes de recorrer la guía restaurante a restaurante.

Rutas gastronómicas:
- https://wineroutesofspain.com/en/wine-routes/ y https://acevin.es — listado oficial "Rutas del Vino de España" (ambas webs bloquearon el scraping automatizado durante esta investigación; puede que haga falta consultarlas a mano o con otra IP/navegador).
- https://rutadeljabugo.travel/ — Ruta del Jabugo (Huelva).
- https://www.rutajamondeguijuelo.com/ — Ruta del Jamón de Guijuelo (Salamanca).
- https://www.turismoextremadura.com/es/ven-a-extremadura/Ruta-del-Iberico/ y .../Ruta-del-Queso/ — rutas extremeñas del ibérico y el queso.
- https://www.rutadelquesoidiazabal.com/es/ — Ruta del Queso Idiazábal (País Vasco).
- https://www.turismocastillalamancha.es/es/enogastronomia/el-queso-manchego-ciudad-real-toledo-cuenca — Ruta del Queso Manchego.
- https://www.jaenparaisointerior.es/es/w/ix-rutas-del-aceite-de-jaen — Rutas del Aceite de Jaén.
- https://www.turismepriorat.org — Ruta del Aceite del Priorat (DOP Siurana).
- https://sidradeasturias.es — Ruta de la Sidra de Asturias.

### 13.2 Cómo se generaliza el mapa a tres modos

El script de `index.astro` no distingue nunca "estoy en modo tal", sino
que cada modo se registra una vez en un objeto `MODOS` con la misma forma:
qué dataset usa, cómo se agrupan sus elementos (categoría de producto,
distinción Michelin o tipo de ruta), cómo se etiquetan, a qué enlazan y qué
textos mostrar. El resto del código (pintar mapa, hover, tarjetas
flotantes, panel, buscador) llama siempre a `cfgActual()` y nunca sabe qué
modo está activo — así no hubo que duplicar la lógica de touch/hover ya
depurada, solo generalizarla.

Restaurantes y rutas no tienen todavía ficha propia (`/productos/[slug]`
sí existe, `/restaurantes/[slug]` y `/rutas/[slug]` no): cuando hay
`enlace` oficial se linka directamente a él (`target="_blank"`); si no,
se muestra el nombre sin enlace en vez de forzar una URL rota.

### 13.3 Bug encontrado y corregido durante la prueba

Al probar el cambio de modo con Playwright en contexto táctil, se detectó
que **tocar fuera del mapa por completo no cerraba las tarjetas** (la
funcionalidad de la sección 11, "cierra al tocar fuera"): la variable
`regionHover` se actualizaba en el hover de ratón pero nunca en el flujo de
toque, así que el listener que decide si cerrar (`if (regionHover && ...)`)
nunca se disparaba fuera del propio mapa. Se corrige asignando
`regionHover = id` también en el `touchend` del overlay táctil, y quitando
el resaltado de la región anterior si se toca una distinta sin haber
cerrado antes. Verificado de nuevo: tocar fuera del mapa ya cierra las
tarjetas correctamente.

## 14. Mapa desbordado en móvil por el selector de modo (corregido)

Con las etiquetas completas de los tres modos ("Denominaciones de
origen", "Restaurantes con estrella", "Rutas gastronómicas") en una sola
línea sin salto, el selector podía forzar a toda la tarjeta del mapa —y al
`<svg>` de dentro, que es `width:100%`— a ensancharse más que la pantalla
en móvil. La causa real no era el tamaño del texto sino un descuido de
CSS Grid: la regla de escritorio ya usaba `minmax(0, 2.3fr) minmax(280px,
0.9fr)` para evitar justo este problema ("grid blowout": un hijo que no
puede encoger fuerza a crecer la pista de la cuadrícula), pero la regla
de móvil se quedó en `1fr` a secas, sin el `minmax(0, ...)`. Se corrige
esa regla y, además, se añade una versión corta de las tres etiquetas
("D.O." / "Restaurantes" / "Rutas") que se muestra por debajo de 600px en
vez de encoger la letra hasta ser ilegible.

## 15. Tarjetas de estadística partidas en dos líneas en móvil (corregido)

Con 5 tarjetas de estadística y etiquetas de cierta longitud (más aún en
los modos de restaurantes/rutas: "3 estrellas", "rutas del jamón"...),
ninguna combinación de texto cabe en una sola fila de un móvil estrecho
sin partirse en dos líneas de tarjetas. En vez de encoger más el texto
(ya bastante pequeño) o acortar más etiquetas, `.stats-row` pasa a
`flex-wrap: nowrap` con `overflow-x: auto` en el media query de móvil:
una única fila, desplazable con el dedo, en vez de dos filas apiladas.
Verificado con Playwright en los tres modos (productos/restaurantes/
rutas): una sola fila visual en los tres casos, sin desbordar la página.

## 16. Tarjetas del hero: resumen fijo en vez de depender del modo (implementado)

Las 5 tarjetas de estadística encima del mapa dejan de cambiar según el
modo activo (antes mostraban "productos en la muestra"/DOP/IGP/ETG/
comunidades en modo productos, y otro desglose distinto en restaurantes/
rutas). Ahora son un resumen fijo, igual en los tres modos: **DOP, IGP,
ETG, restaurantes con estrella y rutas gastronómicas** — se quita la
primera tarjeta (el total de la muestra, redundante con las tres
siguientes) y la última ("17 comunidades", ya no aporta tanto). Al no
depender del modo, `pintarStats()` ya no se repinta en `cambiarModo()`
(su contenido no cambia) y se elimina el campo `statsBreakdown` de
`MODOS`, que ya no se usa.

## 17. Icono en vez de texto para restaurantes/rutas en las tarjetas del hero (implementado)

Las etiquetas "restaurantes con estrella" y "rutas gastronómicas" de las
dos tarjetas nuevas eran tan largas que en móvil la fila desplazable
dejaba la última tarjeta (rutas) fuera de la vista inicial. Se generaliza
la utilidad `.texto-largo`/`.texto-corto` que ya se usaba solo en el
selector de modo (renombrada desde `.modo-largo`/`.modo-corto`, ya que
ahora sirve para cualquier texto que necesite una versión corta en
móvil) y se usa también en las tarjetas de estadística: por debajo de
600px, "restaurantes con estrella" se sustituye por ⭐ y "rutas
gastronómicas" por 🍷 (DOP/IGP/ETG no cambian, ya eran cortas). Verificado
con Playwright: las 5 tarjetas caben ya en una sola línea sin necesidad
de desplazar en un iPhone 13.

## 18. Tarjeta de datos geográficos desbordada por la derecha (corregido)

En la tarjeta de datos de la CCAA (extensión, altitud, clima, temperaturas)
todas las filas se salían por el borde derecho de la tarjeta la misma
cantidad exacta (~2.6px), incluso las más cortas ("Altitud: 7 m"): mismo
patrón de "blowout" que en el grid del explorador (sección 14) y el
selector de modo (sección 17). La causa era el texto libre del clima
(más largo que el resto), que forzaba el ancho de la columna implícita
del `<dl>` — al no tener `grid-template-columns` explícito, esa columna
podía crecer con el contenido, y esa anchura la comparten todas las
filas por igual.

Se corrige con `grid-template-columns: minmax(0, 1fr)` en el `dl` (mismo
arreglo que ya se aplicó al `.explorer` en su día). De paso, en vez de
"encajar" etiqueta y valor en la misma línea (que con la tarjeta tan
estrecha partía palabras por la mitad, ej. "87.268 km²" → "87.26" /
"8 km²"), se apilan: la etiqueta arriba y el valor debajo, mucho más
legible sin depender de partir palabras. Se aplica la misma corrección
preventiva (`grid-template-columns` explícito) a la tarjeta de grupos
flotante, que tiene la misma estructura de lista y el mismo riesgo.

## 19. Scroll fuera del mapa cerraba la selección en móvil (corregido)

Al tocar una región en móvil/tablet y querer bajar la pantalla para ver
su lista en el panel de abajo, la selección se perdía antes de llegar:
el cierre "al tocar fuera del mapa" (sección 11) se disparaba en
`touchstart`, así que el simple gesto de apoyar el dedo fuera del mapa
para empezar a hacer scroll (aunque fuera claramente un arrastre, no un
toque) ya cerraba las tarjetas y deseleccionaba la región.

Se corrige aplicando la misma distinción toque-vs-arrastre que ya se usa
dentro del mapa (`toqueMapa`): en vez de cerrar en `touchstart`, se
guarda el punto de inicio y se decide en `touchend` según cuánto se ha
movido el dedo (umbral de 10px) — un desplazamiento mayor es un scroll y
no cierra nada; un desplazamiento mínimo es un toque deliberado y sí
cierra. Verificado con Playwright (`Input.dispatchTouchEvent` para
simular la secuencia touchstart→touchmove→touchend): un scroll fuera del
mapa mantiene la selección, un toque real fuera del mapa la sigue
cerrando.
