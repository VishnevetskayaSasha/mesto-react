export const popupProfile = document.querySelector(".popup_type_profile"); // попап редактирования профиля
export const popupCards = document.querySelector(".popup_type_cards"); // попап добавления новых карточек
export const popupFullScreen = document.querySelector(".popup_type_img") // попап фулскрин фотки
export const popupDelete = document.querySelector(".popup_type_delete") // попап подтверждения удаления
export const popupAvatar = document.querySelector(".popup_type_avatar") //попап редактирования аватара

export const popupOpenBnt = document.querySelector(".profile__button-edit"); // кнопка открытия попап редактирования профиля
export const popupAddOpenBnt = document.querySelector(".profile__button-add"); // кнопка открытия попап добавления новых карточек
export const popupAvatarOpenBnt = document.querySelector(".profile__avatar-hover"); // кнопка открытия попапа редактирования аватара
export const popupDeleteOpenBnt = document.querySelector(".element__delete") //кнопака открытия попапа подтверждения удаления

export const popupInputAvatar = document.querySelector(".popup__input_type_avatar") //input ссылки для редактирования аватара
export const avatar = document.querySelector(".profile__avatar")// аватар на странице 

export const profName = document.querySelector(".profile__name"); // имя на странице 
export const profDescription = document.querySelector(".profile__description"); // описание на странице

export const popupName = popupProfile.querySelector(".popup__input_type_name");  // форма имени
export const popupDescription = popupProfile.querySelector(".popup__input_type_description"); // форма описания 

export const elementsList = document.querySelector(".elements__list"); // контейнер списка 

export const contentForm =  popupCards.querySelector(".popup__container"); //форма попапа для добавления новых карточек
export const contentProfile = popupProfile.querySelector(".popup__container"); //форма попапа редактирования профиля
export const contentAvatar = popupAvatar.querySelector(".popup__container"); //форма попапа редактирования автара

export const cardName = document.querySelector(".popup__input_type_title"); // форма названия карточки 
export const cardLink = document.querySelector(".popup__input_type_link"); // форма ссылки карточки
 
export const config = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__input_valid_false",
  errorClass: "error"
} 

