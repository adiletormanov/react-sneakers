import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteEmpty = () => {
  return (
    <div className="cartEmpty">
      <img
        className="cartEmpty__img"
        width={120}
        height={120}
        src="/img/empty-cart.jpg"
        alt="Empty"
      />
      <h2>Ничего не добавили</h2>
      <p>
        Добавьте хотя бы пару кроссовок, в которых себя будете чувствовать
        уверенно и свободно.
      </p>
      <Link to="/">
       
        <button className="greenButton">
          <img className="cartEmpty__back" src="/img/arrow.svg" alt="arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default FavoriteEmpty;
