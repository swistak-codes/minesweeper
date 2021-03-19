function fill(x, y, field, visibleField) {
  const size = field.length;
  if (x < 0 || x >= size || y < 0 || y >= size || visibleField[x][y] !== null) {
    return visibleField;
  }

  visibleField[x][y] = field[x][y];
  if (field[x][y] === 0) {
    visibleField = fill(x - 1, y - 1, field, visibleField);
    visibleField = fill(x - 1, y, field, visibleField);
    visibleField = fill(x - 1, y + 1, field, visibleField);
    visibleField = fill(x, y - 1, field, visibleField);
    visibleField = fill(x, y + 1, field, visibleField);
    visibleField = fill(x + 1, y - 1, field, visibleField);
    visibleField = fill(x + 1, y, field, visibleField);
    visibleField = fill(x + 1, y + 1, field, visibleField);
  }
  return visibleField;
}

/**
 * Funkcja obliczająca na nowo co ma być widoczne dla uzytkownika po wykonaniu przez niego akcji
 * @param {Number} x - pozycja x klikniętej komórki
 * @param {Number} y - pozycja y klikniętej komórki
 * @param {*[][]} field - tablica przechowująca zawartość pola gry
 * @param {*[][]} visibleField - tablica przechowująca widoczne dla uzytkownika pole gry
 */
export function computeClickResult(x, y, field, visibleField) {
  let result = JSON.parse(JSON.stringify(visibleField));
  result = fill(x, y, field, result);
  result[x][y] = field[x][y];
  return result;
}
