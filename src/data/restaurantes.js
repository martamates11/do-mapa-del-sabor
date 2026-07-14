// Muestra curada de restaurantes con distinción de la Guía Michelin España
// (edición 2026, gala de noviembre de 2025), agrupados por comunidad autónoma.
// Verificados con más cuidado los de 3 y 2 estrellas (listas cerradas, fáciles
// de contrastar); el bloque de 1 estrella de Aragón y Castilla y León se apoya
// en prensa regional reciente y debe tratarse como muestra representativa,
// pendiente de cotejo ficha a ficha contra guide.michelin.com.
// PENDIENTE: no hay ningún restaurante localizado con distinción para Ceuta
// (18) ni Melilla (19) — Ceuta perdió su único distintivo ("Plato Michelin",
// que no es estrella) en la edición 2026, y no se encontraron fuentes fiables
// para Melilla. No incluye Bib Gourmand en esta primera versión.

export const DISTINCIONES = {
  'Bib Gourmand': { icono: '😋', nombre: 'Bib Gourmand', orden: 0 },
  '1 estrella': { icono: '⭐', nombre: '1 estrella', orden: 1 },
  '2 estrellas': { icono: '⭐⭐', nombre: '2 estrellas', orden: 2 },
  '3 estrellas': { icono: '⭐⭐⭐', nombre: '3 estrellas', orden: 3 },
};

export const RESTAURANTES = [
  // ——— Andalucía (01) ———
  { n: 'Aponiente', ccaa: ['01'], provincia: 'El Puerto de Santa María (Cádiz)', distincion: '3 estrellas', tipo_cocina: 'Cocina marina de vanguardia', d: 'Restaurante de Ángel León centrado en el mar, con técnicas propias como el uso del plancton y productos poco habituales de la bahía de Cádiz.', enlace: 'https://guide.michelin.com/us/en/andalucia/el-puerto-de-santa-maria/restaurant/aponiente' },
  { n: 'Noor', ccaa: ['01'], provincia: 'Córdoba', distincion: '3 estrellas', tipo_cocina: 'Alta cocina de raíz andalusí', d: 'Paco Morales reinterpreta la cocina de Al-Ándalus con técnica contemporánea en un espacio de diseño depurado en Córdoba.' },
  { n: 'Alevante', ccaa: ['01'], provincia: 'El Puerto de Santa María (Cádiz)', distincion: '2 estrellas', tipo_cocina: 'Cocina marina de autor', d: 'Segunda propuesta gastronómica de Ángel León en El Puerto de Santa María, centrada también en el producto del mar.' },
  { n: 'Lú Cocina y Alma', ccaa: ['01'], provincia: 'Jerez de la Frontera (Cádiz)', distincion: '2 estrellas', tipo_cocina: 'Cocina de autor con toques asiáticos', d: 'Juan Luis "Juanlu" Fernández combina raíces gaditanas con influencias orientales en un menú muy personal.' },
  { n: 'Bardal', ccaa: ['01'], provincia: 'Ronda (Málaga)', distincion: '2 estrellas', tipo_cocina: 'Cocina creativa de producto andaluz', d: 'Benito Gómez ofrece una cocina técnica y de temporada en el corazón de la serranía de Ronda.' },
  { n: 'Skina', ccaa: ['01'], provincia: 'Marbella (Málaga)', distincion: '2 estrellas', tipo_cocina: 'Alta cocina andaluza de autor', d: 'Marcos Granada dirige un pequeño espacio en el casco antiguo de Marbella con una cocina mediterránea muy cuidada.', enlace: 'https://www.restauranteskina.com/' },

  // ——— Aragón (02) ———
  { n: 'Lillas Pastia', ccaa: ['02'], provincia: 'Huesca', distincion: '1 estrella', tipo_cocina: 'Cocina tradicional actualizada, especialista en trufa', d: 'Uno de los restaurantes con estrella más veteranos de Aragón, conocido como "la casa de la trufa", dirigido por Carmelo Bosque.', enlace: 'https://guide.michelin.com/us/en/aragon/huesca/restaurant/lillas-pastia' },
  { n: 'Callizo', ccaa: ['02'], provincia: 'Aínsa (Huesca)', distincion: '1 estrella', tipo_cocina: 'Cocina de montaña del Pirineo aragonés', d: 'Propuesta de cocina evolutiva centrada en el producto de proximidad de los valles pirenaicos.' },
  { n: 'La Prensa', ccaa: ['02'], provincia: 'Zaragoza', distincion: '1 estrella', tipo_cocina: 'Cocina de autor contemporánea', d: 'Restaurante zaragozano de menús medidos y elegancia discreta, con foco en la profundidad de sabor.' },

  // ——— Asturias (03) ———
  { n: 'Casa Marcial', ccaa: ['03'], provincia: 'Arriondas', distincion: '3 estrellas', tipo_cocina: 'Alta cocina asturiana de vanguardia', d: 'La familia Manzano eleva productos asturianos tradicionales con técnica de vanguardia; único 3 estrellas de Asturias.' },

  // ——— Illes Balears (04) ———
  { n: 'Voro', ccaa: ['04'], provincia: 'Canyamel, Capdepera (Mallorca)', distincion: '2 estrellas', tipo_cocina: 'Alta cocina mediterránea de autor', d: 'Álvaro Salazar dirige este restaurante del Park Hyatt Mallorca, con menús largos que exploran la diversidad gastronómica española.', enlace: 'https://guide.michelin.com/us/en/islas-baleares/canyamel/restaurant/voro' },

  // ——— Canarias (05) ———
  { n: 'El Rincón de Juan Carlos', ccaa: ['05'], provincia: 'Tacoronte (Tenerife)', distincion: '2 estrellas', tipo_cocina: 'Cocina canaria de autor', d: 'Cocina familiar de los hermanos Padrón que reivindica el producto canario con técnica actual.' },
  { n: 'M.B.', ccaa: ['05'], provincia: 'Guía de Isora (Tenerife)', distincion: '2 estrellas', tipo_cocina: 'Alta cocina vasco-canaria', d: 'Firma de Martín Berasategui en el hotel Ritz-Carlton Abama, con cocina de raíz vasca adaptada al producto canario.' },

  // ——— Cantabria (06) ———
  { n: 'Cenador de Amós', ccaa: ['06'], provincia: 'Villaverde de Pontones', distincion: '3 estrellas', tipo_cocina: 'Alta cocina de producto y temporada', d: 'Jesús Sánchez trabaja el producto cántabro de proximidad en una antigua casona rural.', enlace: 'https://guide.michelin.com/us/en/cantabria/villaverde-de-pontones/restaurant/cenador-de-amos' },

  // ——— Castilla y León (07) ———
  { n: 'Víctor Gutiérrez', ccaa: ['07'], provincia: 'Salamanca', distincion: '1 estrella', tipo_cocina: 'Cocina de autor con influencias peruanas', d: 'Único restaurante con estrella de Salamanca capital, mezcla producto castellano con la herencia peruana del chef.', enlace: 'https://guide.michelin.com/us/en/castilla-y-leon/salamanca/restaurant/victor-gutierrez' },
  { n: 'Trigo', ccaa: ['07'], provincia: 'Valladolid', distincion: '1 estrella', tipo_cocina: 'Cocina castellana de producto', d: 'Víctor Martín reinterpreta la despensa castellana cerca de la Catedral de Valladolid.' },
  { n: 'Cocinandos', ccaa: ['07'], provincia: 'León', distincion: '1 estrella', tipo_cocina: 'Cocina creativa de mercado', d: 'Menú corto y cambiante según mercado, uno de los restaurantes con estrella de referencia en León capital.' },
  { n: 'Ricardo Temiño (La Fábrica)', ccaa: ['07'], provincia: 'Burgos', distincion: '1 estrella', tipo_cocina: 'Cocina de autor de técnica y producto', d: 'Incorporación reciente a la guía, cocina personal centrada en la técnica sobre producto de la región.' },

  // ——— Castilla-La Mancha (08) ———
  { n: 'Iván Cerdeño', ccaa: ['08'], provincia: 'Toledo', distincion: '2 estrellas', tipo_cocina: 'Alta cocina manchega de autor', d: 'Cocina de raíces manchegas con técnica actual, instalada en el antiguo convento de Cigarral del Ángel en Toledo.' },
  { n: 'Maralba', ccaa: ['08'], provincia: 'Almansa (Albacete)', distincion: '2 estrellas', tipo_cocina: 'Cocina de autor de producto manchego', d: 'Fran Martínez ofrece una cocina técnica y sensorial partiendo de producto de la Castilla-La Mancha rural.' },

  // ——— Cataluña (09) ———
  { n: 'ABaC', ccaa: ['09'], provincia: 'Barcelona', distincion: '3 estrellas', tipo_cocina: 'Alta cocina de vanguardia', d: 'Jordi Cruz dirige este restaurante de hotel con un menú a medio camino entre lo clásico y lo experimental.', enlace: 'https://guide.michelin.com/us/en/catalunya/barcelona/restaurant/abac' },
  { n: 'Disfrutar', ccaa: ['09'], provincia: 'Barcelona', distincion: '3 estrellas', tipo_cocina: 'Cocina creativa heredera de elBulli', d: 'Fundado por tres exjefes de cocina de elBulli, ofrece una experiencia lúdica y muy técnica, considerado entre los mejores del mundo.' },
  { n: 'Cocina Hermanos Torres', ccaa: ['09'], provincia: 'Barcelona', distincion: '3 estrellas', tipo_cocina: 'Alta cocina de producto', d: 'Los gemelos Sergio y Javier Torres cocinan en una antigua nave industrial reconvertida en gran sala abierta.', enlace: 'https://guide.michelin.com/us/en/catalunya/barcelona/restaurant/cocina-hermanos-torres' },
  { n: 'El Celler de Can Roca', ccaa: ['09'], provincia: 'Girona', distincion: '3 estrellas', tipo_cocina: 'Alta cocina de autor', d: 'Los hermanos Roca (cocina, sala y postres) firman una de las propuestas más reconocidas internacionalmente de España.', enlace: 'https://guide.michelin.com/us/en/catalunya/girona/restaurant/el-celler-de-can-roca' },
  { n: 'Lasarte', ccaa: ['09'], provincia: 'Barcelona', distincion: '3 estrellas', tipo_cocina: 'Alta cocina de autor', d: 'Restaurante barcelonés de Martín Berasategui con el chef ejecutivo Paolo Casagrande al frente del día a día.' },
  { n: 'Aleia', ccaa: ['09'], provincia: 'Barcelona', distincion: '2 estrellas', tipo_cocina: 'Cocina mediterránea de autor', d: 'Una de las incorporaciones nuevas a dos estrellas en la edición 2026, cocina mediterránea contemporánea.' },
  { n: 'Enigma', ccaa: ['09'], provincia: 'Barcelona', distincion: '2 estrellas', tipo_cocina: 'Cocina de vanguardia', d: 'Proyecto de Albert Adrià, con un recorrido escénico por distintas salas y propuestas muy creativas.' },
  { n: 'Mont Bar', ccaa: ['09'], provincia: 'Barcelona', distincion: '2 estrellas', tipo_cocina: 'Cocina de producto en formato informal', d: 'Combina el ambiente de bar de tapas con una cocina de gran nivel técnico, nuevo dos estrellas en 2026.' },
  { n: 'La Boscana', ccaa: ['09'], provincia: 'Bellvís (Lleida)', distincion: '2 estrellas', tipo_cocina: 'Cocina de proximidad de autor', d: 'Restaurante rural leridano que apuesta por el producto de temporada de su propio huerto y entorno.' },
  { n: 'Cinc Sentits', ccaa: ['09'], provincia: 'Barcelona', distincion: '2 estrellas', tipo_cocina: 'Cocina catalana de autor', d: 'Cocina catalana reinterpretada con producto de mercado y una experiencia muy cuidada en sala.' },
  { n: 'Bo.TiC', ccaa: ['09'], provincia: 'Corçà (Girona)', distincion: '2 estrellas', tipo_cocina: 'Cocina de autor de mercado', d: 'Propuesta gerundense de cocina de producto de proximidad con presentaciones muy elaboradas.' },
  { n: 'Enoteca', ccaa: ['09'], provincia: 'Barcelona', distincion: '2 estrellas', tipo_cocina: 'Cocina mediterránea de autor', d: 'Restaurante del Hotel Arts dirigido por Paco Pérez, con una cocina marinera y mediterránea de gran nivel.' },
  { n: 'Les Cols', ccaa: ['09'], provincia: 'Olot (Girona)', distincion: '2 estrellas', tipo_cocina: 'Cocina de proximidad de origen volcánico', d: 'Fina Puigdevall trabaja el paisaje volcánico de la Garrotxa como eje central de su cocina.' },
  { n: 'Miramar', ccaa: ['09'], provincia: 'Llançà (Girona)', distincion: '2 estrellas', tipo_cocina: 'Cocina marinera de autor', d: 'Segunda casa de Paco Pérez en la Costa Brava, centrada en el producto del mar de la zona.' },

  // ——— Comunitat Valenciana (10) ———
  { n: 'Quique Dacosta Restaurante', ccaa: ['10'], provincia: 'Dénia (Alicante)', distincion: '3 estrellas', tipo_cocina: 'Alta cocina creativa mediterránea', d: 'Quique Dacosta desarrolla una cocina muy conceptual en torno al producto mediterráneo y la Marina Alta.' },
  { n: 'BonAmb', ccaa: ['10'], provincia: 'Xàbia/Jávea (Alicante)', distincion: '2 estrellas', tipo_cocina: 'Cocina mediterránea de proximidad', d: 'Alberto Ferruz trabaja el producto local del Mediterráneo con una cocina depurada y estacional.' },
  { n: 'Flores Raras', ccaa: ['10'], provincia: 'Valencia', distincion: '2 estrellas', tipo_cocina: 'Alta cocina de autor', d: 'Nueva propuesta de Quique Dacosta en la ciudad de Valencia, evolución del antiguo El Poblet, con Carolina Álvarez al frente de cocina.' },
  { n: "L'Escaleta", ccaa: ['10'], provincia: 'Cocentaina (Alicante)', distincion: '2 estrellas', tipo_cocina: 'Cocina de autor de interior', d: 'Cocina de montaña alicantina con fuerte identidad de producto de proximidad.' },
  { n: 'Ricard Camarena', ccaa: ['10'], provincia: 'Valencia', distincion: '2 estrellas', tipo_cocina: 'Cocina de producto y temporada', d: 'Ricard Camarena centra su propuesta en la huerta valenciana y el producto de mercado.' },

  // ——— Extremadura (11) ———
  { n: 'Atrio', ccaa: ['11'], provincia: 'Cáceres', distincion: '3 estrellas', tipo_cocina: 'Alta cocina extremeña de autor', d: 'Toño Pérez y José Polo dirigen este hotel-restaurante en el casco histórico de Cáceres, referencia de la alta cocina extremeña.' },

  // ——— Galicia (12) ———
  { n: 'Retiro da Costiña', ccaa: ['12'], provincia: 'Santa Comba (A Coruña)', distincion: '2 estrellas', tipo_cocina: 'Cocina gallega de producto', d: 'Cocina de fuerte raíz gallega con producto de temporada de la comarca.' },
  { n: 'Pepe Vieira', ccaa: ['12'], provincia: 'Raxó, Poio (Pontevedra)', distincion: '2 estrellas', tipo_cocina: 'Cocina atlántica de autor', d: 'Situado junto a la ría de Pontevedra, propone una cocina muy ligada al paisaje atlántico gallego.' },
  { n: 'Culler de Pau', ccaa: ['12'], provincia: 'O Grove (Pontevedra)', distincion: '2 estrellas', tipo_cocina: 'Cocina marina de las rías', d: 'Javier Olleros trabaja el producto de las rías baixas con una cocina depurada y de temporada.' },

  // ——— Comunidad de Madrid (13) ———
  { n: 'DiverXO', ccaa: ['13'], provincia: 'Madrid', distincion: '3 estrellas', tipo_cocina: 'Cocina creativa de fusión', d: 'Dabiz Muñoz ofrece una propuesta muy personal que mezcla influencias asiáticas, mexicanas y españolas.', enlace: 'https://guide.michelin.com/us/en/comunidad-de-madrid/madrid/restaurant/diverxo' },
  { n: 'Deessa', ccaa: ['13'], provincia: 'Madrid', distincion: '2 estrellas', tipo_cocina: 'Alta cocina mediterránea', d: 'Primer restaurante de Quique Dacosta en Madrid, dentro del hotel Mandarin Oriental Ritz.', enlace: 'https://guide.michelin.com/us/en/comunidad-de-madrid/madrid/restaurant/deessa' },
  { n: 'Coque', ccaa: ['13'], provincia: 'Madrid', distincion: '2 estrellas', tipo_cocina: 'Alta cocina de autor', d: 'Los hermanos Sandoval plantean una experiencia gastronómica dividida en distintos espacios y ambientes.' },
  { n: 'DSTAgE', ccaa: ['13'], provincia: 'Madrid', distincion: '2 estrellas', tipo_cocina: 'Cocina creativa de vanguardia', d: 'Diego Guerrero propone una cocina muy técnica y en constante evolución en el centro de Madrid.' },
  { n: 'Smoked Room', ccaa: ['13'], provincia: 'Madrid', distincion: '2 estrellas', tipo_cocina: 'Cocina de ahumados y brasa', d: 'Segunda propuesta madrileña de Dabiz Muñoz centrada en el humo y las técnicas de brasa.' },
  { n: 'Paco Roncero Restaurante', ccaa: ['13'], provincia: 'Madrid', distincion: '2 estrellas', tipo_cocina: 'Alta cocina técnica', d: 'Paco Roncero desarrolla una cocina de autor muy técnica en el Casino de Madrid.' },
  { n: 'Ramón Freixa Atelier', ccaa: ['13'], provincia: 'Madrid', distincion: '2 estrellas', tipo_cocina: 'Alta cocina de autor', d: 'Ramón Freixa estrena dos estrellas en la edición 2026 con una propuesta creativa en Madrid.' },

  // ——— Región de Murcia (14) ———
  { n: 'Cabaña Buenavista', ccaa: ['14'], provincia: 'Murcia', distincion: '2 estrellas', tipo_cocina: 'Cocina de autor con huerta murciana', d: 'Pablo González elabora una cocina centrada en el producto de la huerta y el entorno rural de Murcia.' },

  // ——— Navarra (15) ———
  { n: 'El Molino de Urdániz', ccaa: ['15'], provincia: 'Urdániz', distincion: '2 estrellas', tipo_cocina: 'Cocina de autor de proximidad', d: 'David Yárnoz cocina en un antiguo molino familiar, con fuerte apuesta por el producto navarro.' },

  // ——— País Vasco (16) ———
  { n: 'Akelarre', ccaa: ['16'], provincia: 'San Sebastián/Donostia', distincion: '3 estrellas', tipo_cocina: 'Alta cocina vasca de vanguardia', d: 'Pedro Subijana dirige este referente de la Nueva Cocina Vasca con vistas al mar Cantábrico.' },
  { n: 'Arzak', ccaa: ['16'], provincia: 'San Sebastián/Donostia', distincion: '3 estrellas', tipo_cocina: 'Alta cocina vasca de autor', d: 'La familia Arzak (Juan Mari y Elena) mantiene uno de los restaurantes más icónicos de España desde hace décadas.', enlace: 'https://guide.michelin.com/us/en/pais-vasco/es-donostia-san-sebastian/restaurant/arzak' },
  { n: 'Azurmendi', ccaa: ['16'], provincia: 'Larrabetzu (Vizcaya)', distincion: '3 estrellas', tipo_cocina: 'Cocina vasca sostenible', d: 'Eneko Atxa combina alta cocina vasca con un fuerte compromiso de sostenibilidad medioambiental.' },
  { n: 'Martín Berasategui', ccaa: ['16'], provincia: 'Lasarte-Oria (Gipuzkoa)', distincion: '3 estrellas', tipo_cocina: 'Alta cocina vasca de autor', d: 'Casa madre del chef con más estrellas de España, referencia histórica de la cocina vasca contemporánea.', enlace: 'https://guide.michelin.com/en/pais-vasco/lasarte-oria/restaurant/martin-berasategui' },
  { n: 'Amelia by Paulo Airaudo', ccaa: ['16'], provincia: 'San Sebastián/Donostia', distincion: '2 estrellas', tipo_cocina: 'Cocina de fusión italo-japonesa', d: 'El chef argentino-italiano Paulo Airaudo combina raíces italianas y japonesas en el hotel María Cristina.', enlace: 'https://guide.michelin.com/us/en/pais-vasco/es-donostia-san-sebastian/restaurant/amelia-1191398' },
  { n: 'Mugaritz', ccaa: ['16'], provincia: 'Errenteria (Gipuzkoa)', distincion: '2 estrellas', tipo_cocina: 'Cocina experimental de vanguardia', d: 'Andoni Luis Aduriz plantea una experiencia muy conceptual y de investigación culinaria constante.' },

  // ——— La Rioja (17) ———
  { n: 'Venta Moncalvillo', ccaa: ['17'], provincia: 'Daroca de Rioja', distincion: '2 estrellas', tipo_cocina: 'Cocina de producto y huerta propia', d: 'Los hermanos Echapresto trabajan producto de su propia huerta y setas de temporada de La Rioja.' },
  { n: 'El Portal de Echaurren', ccaa: ['17'], provincia: 'Ezcaray', distincion: '2 estrellas', tipo_cocina: 'Alta cocina riojana de autor', d: 'Francis Paniego actualiza la cocina tradicional riojana en el histórico hotel Echaurren.' },
];
