import React from "react";
import api from "../utils/Api.js"
import Card from "./Card.js";


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const [userInfo, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // Получаем данные с сервера (Данные профиля + данные карточек)
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then((data) => {
      setUserInfo({
          userName: data[0].name,
          userDescription: data[0].about,
          userAvatar: data[0].avatar
      });
      setCards(data[1]);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })
}, []) // второй параметр в хуке указываем пустой массив, чтоб не отправлялось куча запросов, а только один. 


  return (
    <main className="content">
    <section className="profile">
      <div className="profile__general-information">
        <img src={`${userInfo.userAvatar}`} alt="Аватар" className="profile__avatar"/>
        <button className="profile__avatar-hover" onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name-string">
            <h1 className="profile__name">{userInfo.userName}</h1> 
            <button type="button" className="profile__button-edit" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{userInfo.userDescription}</p>
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
            ></Card>
            )
          })
        }
      </ul>
    </section>
  </main>
  )
}

export default Main

