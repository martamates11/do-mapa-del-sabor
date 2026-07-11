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
