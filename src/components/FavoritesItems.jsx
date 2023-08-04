import React from 'react';

import { removeItem } from '../redux/slices/favoriteSlice';
import {useSelector, useDispatch } from 'react-redux';

const FavoritesItems = ({id, price, imgUrl, title }) => {
  const [addState, setAddState] = React.useState();

  const onClickPlus = () => {
    setAddState(!addState);
  };

  const dispatch = useDispatch();


  const onClickRemove = () => {
      dispatch(removeItem(id));
  };



	
  return (
    <div className="card">
      <div className="card__unliked">
        <img onClick={onClickRemove} src={'/img/liked.svg'} alt="" />
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
            src={addState ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoritesItems;
