import React from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete, cards}) {

  const currentUser = React.useContext(CurrentUserContext); // Подписываемся на контекст CurrentUserContext
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__general-information">
      <img src={ currentUser?.avatar ? currentUser.avatar: 'https://pcvector.ru/800/600/https/www.ngi.no/bundles/ngino/images/spinner.gif'} alt="Аватар" className="profile__avatar"/>
        <button className="profile__avatar-hover" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name-string">
            <h1 className="profile__name">{currentUser.name}</h1> 
            <button type="button" className="profile__button-edit" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
      </div>
        <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
          {cards.map((card) => {
            return(
              <Card
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length} 
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
            />
          )
  })
}
      </ul>
    </section>
  </main>
  );
}

export default Main

