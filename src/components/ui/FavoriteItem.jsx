import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import Svg from './Svg';

export default function FavoriteItem({ fav, deleteHandler }) {
  const isFavorites = true;
  return (
    <>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Header as="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
          Sock
          <CloseButton onClick={() => deleteHandler(fav.id)} />
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" fluid src={fav.pic} style={{ backgroundSize: 'color' }} />
        </Card.Body>
      </Card>
      //{' '}
      <div className="card mb-3" style={{ maxWidth: '540px', padding: '10px' }}>
        //{' '}
        <div className="row g-0">
          //{' '}
          <div className="col-md-4">
            // <img src={fav.pic} className="img-fluid rounded-start" alt="..." />
            //{' '}
          </div>
          //{' '}
          <div className="col-md-8">
            //{' '}
            <div className="card-body">
              //{' '}
              <button
                onClick={() => deleteHandler(fav.id)}
                type="button"
                className="btn btn-danger"
              >
                ✖
              </button>
              //{' '}
            </div>
            //{' '}
          </div>
          //{' '}
        </div>
        //{' '}
      </div>
      <> */}
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
