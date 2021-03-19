/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useIsLocked } from "./MinesweeperContext";

/**
 * Komponent reprezentujący pojedynczą komórkę planszy
 */
export const Cell = ({ onClick, content }) => {
  const isLocked = useIsLocked();
  const isDisabled = content !== null || isLocked;

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        border: solid 1px black;
        cursor: ${isDisabled ? "not-allowed" : "pointer"};
        background: ${isDisabled ? "gray" : "white"};
        color: ${content === "X" ? "red" : "blue"};
        font-weight: bold;

        &:hover {
          border: outset 1px black;
        }

        &:active {
          border: inset 1px black;
        }
      `}
      role="button"
      onClick={onClick}
    >
      {content}
    </div>
  );
};
