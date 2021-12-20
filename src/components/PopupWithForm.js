import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_open" : ""}`}>
          <form name={`${props.nameForm}`} className="popup__container" noValidate>
            <button type="button" className="popup__button-close" onClick={props.onClose}></button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button type="submit" className={`popup__button popup__button_type_${props.button}`}>{props.text}</button>
          </form>
    </div>
  )
}

export default PopupWithForm