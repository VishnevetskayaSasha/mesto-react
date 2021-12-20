import React from "react";

function ImagePopup({card, onClose}) {
  return(
    <div className={`popup popup_type_img ${card.link ? "popup_open" : ""}`}>
          <figure className="figure">
            <img src={card.link} className="popup__foto" alt={card.name} />
            <button type="button" className="popup__button-close" onClick={onClose}></button>
            <figcaption><p className="popup__foto-name">{card.name}</p></figcaption>
          </figure>
        </div>
  )
}
export default ImagePopup

