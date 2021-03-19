/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Field } from "./Field";
import { MinesweeperContextProvider } from "./MinesweeperContext";
import { Controls } from "./Controls";

/**
 * Główny komponent aplikacji
 */
export const App = () => {
  return (
    <MinesweeperContextProvider>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: sans-serif;
          text-align: center;
        `}
      >
        <h1>Saper</h1>
        <Field />
        <Controls />
      </div>
    </MinesweeperContextProvider>
  );
};
