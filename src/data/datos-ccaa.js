// Datos de referencia por comunidad autónoma para la tarjeta informativa del
// mapa (extensión, altitud de la capital, clima, temperaturas orientativas y
// lengua/dialecto). Son valores aproximados de cultura general geográfica, no
// cifras oficiales verificadas al detalle — para un uso más riguroso,
// contrastar con AEMET/INE. El campo `dialecto` es una simplificación
// divulgativa (castellano + lengua cooficial o habla local más conocida
// donde la hay), no una clasificación lingüística ni jurídica exhaustiva.
export const DATOS_CCAA = {
  '01': { extension: 87268, altitud: 7, clima: 'Mediterráneo, cálido y seco en verano', tempMax: 40, tempMin: 2, dialecto: 'Castellano (dialecto andaluz)' },
  '02': { extension: 47720, altitud: 199, clima: 'Continental, veranos calurosos e inviernos fríos', tempMax: 34, tempMin: -2, dialecto: 'Castellano (con aragonés y catalán en algunas comarcas)' },
  '03': { extension: 10604, altitud: 232, clima: 'Oceánico, húmedo y templado', tempMax: 26, tempMin: 4, dialecto: 'Castellano y asturiano (bable)' },
  '04': { extension: 4992, altitud: 13, clima: 'Mediterráneo insular, suave', tempMax: 30, tempMin: 8, dialecto: 'Castellano y catalán (variante balear)' },
  '05': { extension: 7447, altitud: 3, clima: 'Subtropical, templado todo el año', tempMax: 28, tempMin: 15, dialecto: 'Castellano (dialecto canario)' },
  '06': { extension: 5321, altitud: 15, clima: 'Oceánico, húmedo', tempMax: 25, tempMin: 6, dialecto: 'Castellano (con cántabro/montañés como habla local)' },
  '07': { extension: 94226, altitud: 690, clima: 'Continental, inviernos fríos y veranos cortos', tempMax: 33, tempMin: -4, dialecto: 'Castellano' },
  '08': { extension: 79463, altitud: 540, clima: 'Continental extremado', tempMax: 36, tempMin: -3, dialecto: 'Castellano' },
  '09': { extension: 32113, altitud: 12, clima: 'Mediterráneo, variable de costa a interior', tempMax: 32, tempMin: 2, dialecto: 'Castellano y catalán (aranés en el Valle de Arán)' },
  '10': { extension: 23255, altitud: 15, clima: 'Mediterráneo, suave', tempMax: 32, tempMin: 6, dialecto: 'Castellano y valenciano' },
  '11': { extension: 41635, altitud: 219, clima: 'Mediterráneo continentalizado, veranos muy calurosos', tempMax: 38, tempMin: 0, dialecto: 'Castellano (con extremeño como habla local)' },
  '12': { extension: 29574, altitud: 260, clima: 'Oceánico, lluvioso todo el año', tempMax: 28, tempMin: 3, dialecto: 'Castellano y gallego' },
  '13': { extension: 8028, altitud: 667, clima: 'Continental mediterráneo', tempMax: 34, tempMin: -1, dialecto: 'Castellano' },
  '14': { extension: 11314, altitud: 43, clima: 'Mediterráneo semiárido', tempMax: 36, tempMin: 3, dialecto: 'Castellano (dialecto murciano/panocho)' },
  '15': { extension: 10391, altitud: 449, clima: 'Oceánico al norte, continental al sur', tempMax: 32, tempMin: -2, dialecto: 'Castellano y euskera (en la zona vascófona)' },
  '16': { extension: 7234, altitud: 525, clima: 'Oceánico, húmedo', tempMax: 28, tempMin: 4, dialecto: 'Castellano y euskera' },
  '17': { extension: 5045, altitud: 384, clima: 'Continental mediterráneo', tempMax: 33, tempMin: -2, dialecto: 'Castellano' },
  '18': { extension: 19, altitud: 8, clima: 'Mediterráneo con influencia atlántica', tempMax: 28, tempMin: 10, dialecto: 'Castellano' },
  '19': { extension: 12, altitud: 45, clima: 'Mediterráneo semiárido', tempMax: 29, tempMin: 8, dialecto: 'Castellano' },
};
