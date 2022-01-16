import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from '../contexts/CurrentUserContext.js';


function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст CurrentUserContext

// После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
// данные со страницы будут отображаться в полях формы
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser, props.isOpen]); 

  // Стейт, в котором содержится значение инпута
  const [name, setName] = React.useState("");
  const [description, setDescription ] = React.useState("");

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(event) {
    setName(event.target.value);
  }
  
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы (перезагружать страницу)
    event.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm // попап редактирования профиля
      name="profile"
      nameForm="edit-form"
      title="Редактировать профиль"
      button="save"
      text="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="edit-name"
        name="name"
        placeholder="Жак-Ив Кусто"
        className="popup__input popup__input_type_name" 
        required  
        minLength="2" 
        maxLength="40"
        value={`${name}`} 
        onChange={handleChangeName}/>
      <span id="edit-description-error" className="error"></span>
      <input
        type="text" 
        id="edit-description" 
        name="about" 
        placeholder="Исследователь океана" 
        className="popup__input popup__input_type_description" 
        required  
        minLength="2" 
        maxLength="200"
        value={`${description}`}
        onChange={handleChangeDescription} />
      <span id="edit-description-error" className="error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;