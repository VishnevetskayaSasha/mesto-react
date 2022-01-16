import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup (props) {
  

  // Стейт, в котором содержится значение инпута
  const [nameCard, setNameCard] = React.useState("");
  const [linkCard, setLinkCard ] = React.useState("")

  // при отерытии попапа поле будет пустое
  React.useEffect(() => {
    setNameCard("");
    setLinkCard("");
  }, [props.isOpen]); //Если у хука не указаны зависимости, он будет вызван после каждого рендера и мы не сможем нисего написавть в поле

  // Обработчик изменения инпута обновляет стейт
  function handleChangeNameCard(event) {
    setNameCard(event.target.value);
  }
  
  function handleChangeLinkCard(event) {
    setLinkCard(event.target.value);
  }

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы (перезагружать страницу)
    event.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: nameCard,
      link: linkCard,
    });
  }
  
  return(
    <PopupWithForm // попап добавления карточек
      name="cards"
      nameForm="add-form"
      title="Новое место"
      button="create"
      text="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        id="edit-title" 
        name="title" 
        placeholder="Название" 
        className="popup__input popup__input_type_title" 
        required  
        minLength="2" 
        maxLength="30"
        value={`${nameCard}`} 
        onChange={handleChangeNameCard}/>
      <span id="edit-title-error" className="error"></span>
      <input 
        type="url" 
        id="edit-link" 
        name="link" 
        placeholder="Ссылка на картинку" 
        className="popup__input popup__input_type_link" 
        required
        value={`${linkCard}`} 
        onChange={handleChangeLinkCard} />
      <span id="edit-link-error" className="error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup
