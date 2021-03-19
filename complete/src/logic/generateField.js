/**
 * Funkcja generująca pole gry
 * @param {*[]][]} field - aktualne pole gry
 * @param {Number} mineCount - liczba min do ułozenia
 */
export function generateField(field, mineCount) {
  let result = JSON.parse(JSON.stringify(field));
  const size = result.length;

  // ułozenie min
  while (mineCount > 0) {
    const i = Math.floor(Math.random() * size);
    const j = Math.floor(Math.random() * size);
    if (result[i][j] === "X") {
      continue;
    }
    result[i][j] = "X";
    mineCount--;
  }

  // obliczenie sąsiedztw
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (result[i][j] === "X") {
        continue;
      }
      const left = i - 1;
      const right = i + 1;
      const top = j - 1;
      const bottom = j + 1;
      let count = 0;
      // lewy górny
      if (left >= 0 && top >= 0 && result[left][top] === "X") {
        count++;
      }
      // środkowy górny
      if (top >= 0 && result[i][top] === "X") {
        count++;
      }
      // prawy górny
      if (right < size && top >= 0 && result[right][top] === "X") {
        count++;
      }
      // lewy środkowy
      if (left >= 0 && result[left][j] === "X") {
        count++;
      }
      // prawy środkowy
      if (right < size && result[right][j] === "X") {
        count++;
      }
      // lewy dolny
      if (left >= 0 && bottom < size && result[left][bottom] === "X") {
        count++;
      }
      // środkowy dolny
      if (bottom < size && result[i][bottom] === "X") {
        count++;
      }
      // prawy dolny
      if (right < size && bottom < size && result[right][bottom] === "X") {
        count++;
      }
      result[i][j] = count;
    }
  }

  return result;
}
