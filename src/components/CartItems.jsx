import React from 'react';

import { removeItemCart } from '../redux/slices/cartSlice';
import {  useDispatch } from 'react-redux';


const CartItems = ({ id, price, imgUrl, title }) => {
  const dispatch = useDispatch();

	const [addState, setAddState] = React.useState();

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItemCart(id));
    }
  };

	const onClickPlus = () => {
    setAddState(!addState);
  };



  return (
    <div className="cartItem">
      <div
        className="cartItem__sneakers-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <div className="cartItem__info">
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <img
        onClick={onClickRemove}
        className="cartItem__remove-img"
        src="/img/btn-remove.svg"
        alt="remove"
      />
    </div>
  );
};

export default CartItems;
