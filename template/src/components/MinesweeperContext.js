import { createContext, useContext, useEffect, useState } from "react";
import { computeClickResult } from "../logic/computeClickResult";
import { getEmptyField } from "../logic/getEmptyField";
import { generateField } from "../logic/generateField";
import { hasPlayerWon } from "../logic/hasPlayerWon";

const SIZE = 5;

const MINE_COUNT = 5;

const getNewField = () => generateField(getEmptyField(SIZE, 0), MINE_COUNT);

const MinesweeperContext = createContext();

/**
 * Komponent przechowujący stan rozgrywki
 */
export const MinesweeperContextProvider = ({ children }) => {
  const [field, setField] = useState(getNewField());
  const [visibleField, setVisibleField] = useState(getEmptyField(SIZE, null));
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (hasPlayerWon(field, visibleField)) {
      alert("Wygrałeś!");
      setLocked(true);
    }
  }, [field, visibleField]);

  return (
    <MinesweeperContext.Provider
      value={{
        field,
        setField,
        visibleField,
        setVisibleField,
        locked,
        setLocked
      }}
    >
      {children}
    </MinesweeperContext.Provider>
  );
};

/**
 * Hook zwracający widoczną planszę oraz logikę naciskania komórki
 */
export const useField = () => {
  const { field, visibleField, setVisibleField, setLocked } = useContext(
    MinesweeperContext
  );

  const handleCellClick = (x, y) => () => {
    setVisibleField((vField) => computeClickResult(x, y, field, vField));
    if (field[x][y] === "X") {
      alert("Przegrałeś!");
      setLocked(true);
    }
  };

  return { field: visibleField, handleCellClick };
};

/**
 * Hook zwracający informację, czy komórki powinny być zablokowane
 */
export const useIsLocked = () => {
  return useContext(MinesweeperContext).locked;
};

/**
 * Hook zwracający logikę dla kontrolek spod planszy
 */
export const useFieldControls = () => {
  const {
    field,
    setField,
    visibleField,
    setVisibleField,
    setLocked
  } = useContext(MinesweeperContext);
  const [copy, setCopy] = useState();

  const reset = () => {
    setField(generateField(getNewField()));
    setVisibleField(getEmptyField(SIZE, null));
    setLocked(false);
  };

  const preview = () => {
    setCopy(visibleField);
    setVisibleField(field);
  };

  const stopPreview = () => {
    setVisibleField(copy);
  };

  return { reset, preview, stopPreview };
};
