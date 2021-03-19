/**
 * Funkcja obliczająca na nowo co ma być widoczne dla uzytkownika po wykonaniu przez niego akcji
 * @param {Number} x - pozycja x klikniętej komórki
 * @param {Number} y - pozycja y klikniętej komórki
 * @param {*[][]} field - tablica przechowująca zawartość pola gry
 * @param {*[][]} visibleField - tablica przechowująca widoczne dla uzytkownika pole gry
 */
export function computeClickResult(x, y, field, visibleField) {
  let result = JSON.parse(JSON.stringify(visibleField));
  // tutaj wpisz kod
  return result;
}
