import React from 'react';
import '../index.css';
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup.js"

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: '', name: ''});

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
    setSelectedCard({link: '', name: ''});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
      <div className="contents">
        <div className="page">
          <Header/>
          <Main 
            onEditProfile={ handleEditProfileClick }
            onEditAvatar={ handleEditAvatarClick }
            onAddPlace={ handleAddPlaceClick }
            onCardClick={ handleCardClick }
           />
          <Footer/>
        </div>
        <PopupWithForm // попап редактирования профиля
          name="profile"
          nameForm="edit-form"
          title="Редактировать профиль"
          button="save"
          text="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            id="edit-name"
            name="name"
            placeholder="Жак-Ив Кусто"
            className="popup__input popup__input_type_name" 
            required  
            minLength="2" 
            maxLength="40"/>
          <span id="edit-description-error" className="error"></span>
          <input
            type="text" 
            id="edit-description" 
            name="about" 
            placeholder="Исследователь океана" 
            className="popup__input popup__input_type_description" 
            required  
            minLength="2" 
            maxLength="200" />
          <span id="edit-description-error" className="error"></span>
        </PopupWithForm>
        <PopupWithForm // попап добавления карточек
          name="cards"
          nameForm="add-form"
          title="Новое место"
          button="create"
          text="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input 
            type="text" 
            id="edit-title" 
            name="title" 
            placeholder="Название" 
            className="popup__input popup__input_type_title" 
            required  
            minLength="2" 
            maxLength="30"/>
          <span id="edit-title-error" className="error"></span>
          <input 
            type="url" 
            id="edit-link" 
            name="link" 
            placeholder="Ссылка на картинку" 
            className="popup__input popup__input_type_link" 
            required />
          <span id="edit-link-error" className="error"></span>
        </PopupWithForm>
        <PopupWithForm // попап подтверждения удаления (!!! Если у компонента нет вложенных элементов, лучше делать сразу самозакрывающийся тег)
          name="delete"
          nameForm="delete-form"
          title="Вы уверены?"
          button="delete"
          text="Да"
        />
        <PopupWithForm // попап аватара
          name="avatar"
          nameForm="avatar-form"
          title="Обновить аватар"
          button="save-avatar"
          text="Сохранить"
          isOpen={ isEditAvatarPopupOpen }
          onClose={ closeAllPopups }
        >
          <input 
            type="url" 
            id="edit-avatar-link" 
            name="avatar" 
            placeholder="Ссылка на аватар" 
            className="popup__input popup__input_type_avatar" 
            required/>
            <span id="edit-avatar-link-error" className="error"></span>
        </PopupWithForm>
        <ImagePopup // попап фулскрин картинки
           card={selectedCard}
           onClose={closeAllPopups}
        />
      </div> 
  );
}

export default App
