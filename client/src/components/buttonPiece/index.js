import React from 'react';
import { Button } from '@material-ui/core';
import PricePiece from '../pricePiece';
import { useOrderButtonContext } from '../../services/globalOrderButton';

function ButtonPiece ({ orderId, itemId, title, price, setRefresh, refresh }) {
  const [_, dispatch] = useOrderButtonContext(); // eslint-disable-line

  const handleClick = async (event) => {
    // console.log(event);
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
    try {
      await dispatch({
        type: 'add',
        orderId: orderId,
        itemId: itemId,
        title: title,
        price: price
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={handleClick} variant='outlined'>{title}</Button>
      <PricePiece price={price} />
    </div>
  );
}

export default ButtonPiece;
