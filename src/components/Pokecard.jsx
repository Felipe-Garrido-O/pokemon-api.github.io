import React from 'react';
import { Card } from 'react-bootstrap';

const Pokecard = ({pokemones}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pokemones.sprites.other.dream_world.front_default}/>
    <Card.Body>
      <Card.Title>{pokemones.name}</Card.Title>
      <Card.Text>
      {pokemones.types}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Pokecard;
