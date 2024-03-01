import React from 'react';
import { Card } from 'react-bootstrap';
import Svg from './Svg';

export default function FavoriteItem({ fav, deleteHandler }) {
  const isFavorites = true;
  return (
    <>
      <Card
        style={{ borderBottom: 'none', backgroundColor: 'black' }}
        className="card card-content"
      >
        <Svg setColor={fav.Color.color} isFavorites={isFavorites} />
      </Card>
      <Card className="card card-content">
        <img
          src={fav.Image.image}
          alt="Selected"
          width="70"
          height="70"
          style={{ position: 'absolute', top: '-300px', left: '95px' }}
        />

        <img
          src={fav.Decor.decor}
          alt="Selected"
          width="300"
          height="350"
          style={{ position: 'absolute', top: '-350px', left: '50px' }}
        />
      </Card>
    </>
  );
}
