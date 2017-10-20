import game1 from "./Game-1";
import game2 from "./Game-2";
import game3 from "./Game-3";
import renderScreen from "./../utils";
import getNextScreenData from "./state";

const games = [game1, game2, game3];

const getNextScreen = () => {
  const nextScreen = getNextScreenData();
  return renderScreen(nextScreen);
};

export {getNextScreen, games};
