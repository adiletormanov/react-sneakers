import React from 'react';
import CartEmpty from './CartEmpty';

import { useSelector } from 'react-redux';
import CartItems from './CartItems';

function Drawer({ onClickClose }) {
  const percentage = 5;

  const items = useSelector((state) => state.cartSlice.items);
  const { totalPrice } = useSelector((state) => state.cartSlice);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="cart__title">
          Корзина
          <img onClick={onClickClose} src="/img/btn-remove.svg" alt="close" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <CartItems key={obj.id} {...obj} />
              ))}
            </div>

            <div className="cart__sum">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.ceil((totalPrice / 100) * percentage)} руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{' '}
              </button>
            </div>
          </div>
        ) : (
          <CartEmpty onClickClose={onClickClose} />
        )}
      </div>
    </div>
  );
}

export default Drawer;
