/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { useFieldControls } from "./MinesweeperContext";

/**
 * Komponent kontrolek wyświetlanych pod planszą
 */
export const Controls = () => {
  const { reset, preview, stopPreview } = useFieldControls();
  const [isPreview, setIsPreview] = useState(false);

  const buttonCss = css`
    cursor: pointer;
  `;

  const handlePreviewClick = () => {
    if (isPreview) {
      stopPreview();
      setIsPreview(false);
    } else {
      preview();
      setIsPreview(true);
    }
  };

  return (
    <div
      css={css`
        margin-top: 1em;
      `}
    >
      <button css={buttonCss} type="button" onClick={reset}>
        Nowa gra
      </button>
      <button css={buttonCss} onClick={handlePreviewClick}>
        {isPreview ? "Wyłącz podgląd" : "Podgląd planszy"}
      </button>
    </div>
  );
};
