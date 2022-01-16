import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef(); // записываем объект, возвращаемый хуком, в переменную

  // при отерытии попапа поле будет пустое
  React.useEffect(() => {
    avatarRef.current.value = ""
  }, [props.isOpen])

  function handleSubmit(evant) {
    // Запрещаем браузеру переходить по адресу формы (перезагружать страницу)
    evant.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      avatar: avatarRef.current.value // вызываем нужный метод на поле current объекта
    })
  }

  return (
    <PopupWithForm // попап аватара
      name="avatar"
      nameForm="avatar-form"
      title="Обновить аватар"
      button="save-avatar"
      text="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input 
        type="url" 
        id="edit-avatar-link" 
        name="avatar" 
        placeholder="Ссылка на аватар" 
        className="popup__input popup__input_type_avatar" 
        required
        ref={avatarRef} // указали элементу атрибут ref => получили прямой доступ к DOM-элементу
        />
        <span id="edit-avatar-link-error" className="error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup