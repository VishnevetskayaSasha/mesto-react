import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card({card, onCardClick, onCardLike, onCardDelete}) { 
  const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст CurrentUserContext

               //   удаление //
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `element__delete ${isOwn ? "element__delete" : "element__delete_invisible"}`
  );

             //   лайк //
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${isLiked ? "element__like_black" : "element__like"}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLike() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
  }

  return (
    <li className="element">
      <img src={card.link} className="element__foto" alt={card.name} onClick={handleClick}/>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <div className="element__description">
        <p className="element__name">{card.name}</p>
        <div className="element__container-like">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLike}></button>
          <span className="element__like-num">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card