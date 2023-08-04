import React from 'react';


import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItemCart } from '../../redux/slices/cartSlice.js';
import { addItemFav, removeItem } from '../../redux/slices/favoriteSlice.js';


function Card({ id, title, price, imgUrl }) {
  const dispatch = useDispatch();


  const [addState, setAddState] = React.useState();
  const [onFavorite, setOnFavorite] = React.useState();

  const onClickPlus = () => {
setAddState(!addState);
  };

  const onClickFavorite = () => {
setOnFavorite(!onFavorite);
  };


  const onClickAdd = () => {
    const item = { id, title, price, imgUrl };
    dispatch(addItem(item));
  };

  const onClickAddFav = () => {
    const item = { id, title, price, imgUrl };
    dispatch(addItemFav(item));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  const onAddRemoveFav = () => {
    if (!onFavorite) {
      onClickAddFav();
    } else {
      onClickRemove(onFavorite);
    }
  };

  const onClickRemoveCart = () => {
      dispatch(removeItemCart(id));
  };

  const OnAddRemoveCart = () => {
    if (!addState) {
      onClickAdd();
    } else {
      onClickRemoveCart(addState);
    }
  };

  return (
    <div className="card">
      <div className="card__unliked" onClick={onClickFavorite}>
        <img
          onClick={onAddRemoveFav}
          src={onFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
          alt="liked"
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt="" />
      <p>{title}</p>

      <div className="card__price">
        <div className="card__prices">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <div className="card__button" onClick={onClickPlus}>
          <img
            onClick={OnAddRemoveCart}
            src={addState ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
