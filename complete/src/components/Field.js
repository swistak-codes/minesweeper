/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useField } from "./MinesweeperContext";
import { Cell } from "./Cell";

/**
 * Komponent wyświetlający pole gry
 */
export const Field = () => {
  const { field, handleCellClick } = useField();

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(${field.length}, 1fr);
        grid-column-gap: 1px;
        grid-row-gap: 1px;
        width: calc((2em + 4px) * ${field.length});
      `}
    >
      {field.map((row, x) =>
        row.map((cell, y) => (
          <Cell
            content={cell}
            onClick={handleCellClick(x, y)}
            key={`${x}${y}`}
          />
        ))
      )}
    </div>
  );
};
