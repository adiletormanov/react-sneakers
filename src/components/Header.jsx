import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ onClickCart }) {
  const { totalPrice } = useSelector((state) => state.cartSlice);

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />

          <div className="headerInfo">
            <h3 className="header__title">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight">
        <li onClick={onClickCart} className="headerRight__cart">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="headerRight__like">
          <Link to="/favorites">
            <img
              width={20}
              height={20}
              src="/img/favotite.svg"
              alt="favorite"
            />
          </Link>
        </li>
        <li className="headerRight__user">
				<Link to="/LoginPage">
          <img width={18} height={18} src="/img/user.svg" />
					</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
