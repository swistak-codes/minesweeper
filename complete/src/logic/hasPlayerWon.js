/**
 * Sprawdza, czy gracz odkrył wszystkie pola niebędące minami
 * @param {*[][]} field
 * @param {*[][]} visibleField
 */
export function hasPlayerWon(field, visibleField) {
  const size = field.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (
        (visibleField[i][j] === null && field[i][j] === "X") ||
        (visibleField[i][j] === field[i][j] && visibleField[i][j] !== "X")
      ) {
        continue;
      }
      return false;
    }
  }

  return true;
}
