import React from 'react';
import { Card } from 'react-bootstrap';
import Svg from './Svg';

export default function CartItem({ item, deleteHandler }) {
  const isItemInCart = true;
  return (
    <>
      <Card
        style={{ borderBottom: 'none', backgroundColor: 'black' }}
        className="card card-content"
      >
        <Svg setColor={item.Color.color} isItemInCart={isItemInCart} />
      </Card>
      <Card className="card card-content">
        <img
          src={item.Image.image}
          alt="Selected"
          width="70"
          height="70"
          style={{ position: 'absolute', top: '-300px', left: '95px' }}
        />

        <img
          src={item.Decor.decor}
          alt="Selected"
          width="300"
          height="350"
          style={{ position: 'absolute', top: '-350px', left: '50px' }}
        />
      </Card>
    </>
  );
}
