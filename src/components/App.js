import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/Api.js"
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: "", name: ""});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  // Получаем данные с сервера (Данные профиля + данные карточек)
  React.useEffect(() => {
    api.getUserInfo() 
      .then((userData) => {
      setCurrentUser(userData);
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    api.getInitialCards() 
      .then((cards) => {
      setCards(cards)
    })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({link: "", name: ""});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // отправляем данные профиля на сервер
  function handleUpdateUser(user) {
    api.editUserInfo(user)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  function handleAddPlaceSubmit(newCard) {
    api.addNewCards(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }

  
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
}


  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((event) => event._id !== card._id);
        setCards(newCards);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }
  
  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="contents">
        <div className="page">
          <Header/>
          <Main 
            onEditProfile={ handleEditProfileClick }
            onEditAvatar={ handleEditAvatarClick }
            onAddPlace={ handleAddPlaceClick }
            onCardClick={ handleCardClick }
            onCardLike={ handleCardLike }
            onCardDelete={ handleCardDelete }
            cards={ cards }
           />
          <Footer/>
        </div>
        <EditProfilePopup  // попап редактирования профиля
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        <AddPlacePopup // попап добавления карточек
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit} 
          />
        <PopupWithForm // попап подтверждения удаления (!!! Если у компонента нет вложенных элементов, лучше делать сразу самозакрывающийся тег)
          name="delete"
          nameForm="delete-form"
          title="Вы уверены?"
          button="delete"
          text="Да"
        />
        <EditAvatarPopup // попап аватара
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />
        <ImagePopup // попап фулскрин картинки
           card={selectedCard}
           onClose={closeAllPopups}
        />
      </div> 
    </CurrentUserContext.Provider>
  );
}

export default App
