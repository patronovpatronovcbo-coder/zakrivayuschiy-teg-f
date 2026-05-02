/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll(".like-icon");
const likeButtonArray = document.querySelectorAll(".card__like-button");
const iconButtonArray = document.querySelectorAll(".card__icon-button");

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle("is-liked");
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes("is-liked")) {
    setTimeout(
      () => (button.querySelector(".button__text").textContent = "Unlike"),
      500,
    );
  } else {
    setTimeout(
      () => (button.querySelector(".button__text").textContent = "Like"),
      500,
    );
  }
}

const dialog = document.querySelector(".dialog");
const openButton = document.querySelector(".footer__save-button");
const closeButton = document.querySelector(".dialog__button");

// открыть модалку
openButton.addEventListener("click", () => {
  dialog.showModal();
});

// закрыть по кнопке ОК
closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (evt) => {
  const rect = dialog.getBoundingClientRect();

  const isClickOutside =
    evt.clientX < rect.left ||
    evt.clientX > rect.right ||
    evt.clientY < rect.top ||
    evt.clientY > rect.bottom;

  if (isClickOutside) {
    dialog.close();
  }
});
