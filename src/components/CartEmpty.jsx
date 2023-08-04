import React from 'react';

function CartEmpty({onClickClose}) {
  return (
    <div className="cartEmpty">
      <img
        className="cartEmpty__img"
        width={120}
        height={120}
        src="/img/empty-cart.jpg"
        alt="Empty"
      />
      <h2>Корзина пустая</h2>
      <p>Добавьте хотя бы пару кроссовок, чтобы сделать заказ.</p>
      <button onClick={onClickClose}  className="greenButton">
        <img className='cartEmpty__back' src="/img/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default CartEmpty;
