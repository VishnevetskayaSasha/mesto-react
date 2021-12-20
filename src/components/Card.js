import React from "react"

function Card(card) {

  function handleClick() {
    card.onCardClick(card.card);
}

  return (
    <li className="element">
      <img src={card.link} className="element__foto" alt={card.name} onClick={handleClick}/>
            <button type="button" className="element__delete"></button>
              <div className="element__description">
                <p className="element__name">{card.name}</p>
                <div className="element__container-like">
                  <button type="button" className="element__like"></button>
                  <span className="element__like-num">{card.likes}</span>
                </div>
              </div>
          </li>
  )
}

export default Card