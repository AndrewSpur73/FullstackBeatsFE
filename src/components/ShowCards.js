'use client';

import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Image } from 'react-bootstrap';
import cardData from '../utils/sample-data/CardData';

export default function ShowCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {cardData.map((showItem) => (
        <Card key={showItem.title} style={{ width: '18rem' }}>
          <Image variant="top" src={showItem.imgUrl} />
          <Card.Body>
            <Card.Title>{showItem.title}</Card.Title>
            <span>Hosting</span>
            <Card.Text>{showItem.details}</Card.Text>
            <Button variant="primary">Hosting</Button>
            <Button variant="primary">Attending</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
