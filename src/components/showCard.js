'use client';

import PropTypes from 'prop-types';
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../styles/globals.css';
import { useAuth } from '../utils/context/authContext';
import { createReservation } from '../api/ShowData';

function ShowCards({ showObj }) {
  const { user } = useAuth();
  // const [selectRsvp, setSelectRsvp] = useState(false);

  const RSVP = (showId) => {
    const userId = user.id;
    createReservation(showId, userId);
    console.warn(showId, userId);
  };

  // const toggleselectRsvp = () => {
  //   setSelectRsvp(!selectRsvp);
  // };

  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" className="cardImage" src={showObj.image} />
        <Card.Body className="text-center">
          <Card.Title>{showObj.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ backgroundColor: 'rgb(247, 157, 17)' }}>{showObj.airDate}</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: 'rgb(247, 157, 17)' }}>{showObj.description}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="outline-dark" className="me-2">
              Detail
            </Button>
            <Button variant="outline-light" onClick={() => RSVP(showObj.id)}>
              RSVP
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

ShowCards.propTypes = {
  showObj: PropTypes.shape({
    airDate: PropTypes.string,
    id: PropTypes.number,
    category: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
export default ShowCards;
