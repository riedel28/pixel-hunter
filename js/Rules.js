import {
  getElementFromTemplate,
  removeEventHandlers,
  renderScreen
} from "./utils";

import greeting from "./Greeting";
import game1 from "./Game-1";

const rules = getElementFromTemplate(
    `<header class="header">
      <div class="header__back">
        <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
      </div>
    </header>
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png"
          width="16" height="16" alt="">.<br> Фотографиями или рисунками могут быть оба изображения.<br> На каждую попытку
        отводится 30 секунд.<br> Ошибиться можно не более 3 раз.<br>
        <br> Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`
);

const arrowBack = rules.querySelector(`.header__back`);
const form = rules.querySelector(`.rules__form`);
const nameField = rules.querySelector(`.rules__input`);
const button = rules.querySelector(`.rules__button`);

const isEmpty = () => nameField.value === ``;

const enableButton = () => {
  return !isEmpty()
    ? button.removeAttribute(`disabled`)
    : button.setAttribute(`disabled`, `disabled`);
};

const handlers = [];

const onArrowBackClick = () => {
  removeEventHandlers(handlers, () => {
    renderScreen(greeting());
  });
};

const onFormSubmit = (e) => {
  e.preventDefault();
  removeEventHandlers(handlers, () => {
    renderScreen(game1());
  });
};

const onNameField = () => {
  removeEventHandlers(handlers, () => {
    enableButton();
  });
};

handlers.push({target: arrowBack, type: `click`, handler: onArrowBackClick});
handlers.push({target: form, type: `submit`, handler: onFormSubmit});
handlers.push({target: nameField, type: `keyup`, handler: onNameField});

export default () => {
  arrowBack.addEventListener(`click`, onArrowBackClick);
  nameField.addEventListener(`keyup`, enableButton);
  form.addEventListener(`submit`, onFormSubmit);
  return rules;
};