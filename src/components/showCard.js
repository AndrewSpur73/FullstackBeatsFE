'use client';

import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../styles/globals.css';
import { useAuth } from '../utils/context/authContext';
import { createReservation, toggleRSVP } from '../api/ShowData';

function ShowCards({ showObj }) {
  const { user } = useAuth();
  const [selectRsvp, setSelectRsvp] = useState(false);

  const RSVP = (showId) => {
    const userId = user.id;
    createReservation(showId, userId);
    setSelectRsvp(true);
  };

  useEffect(() => {
    toggleRSVP(user.id, showObj.id).then(setSelectRsvp);
  }, [user, showObj]);

  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" className="cardImage" src={showObj.image} alt={showObj.image} />
        <Card.Body className="text-center">
          <Card.Title>{showObj.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ backgroundColor: 'rgb(247, 157, 17)' }}>{showObj.airDateFormatted}</ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '15px', backgroundColor: 'rgb(247, 157, 17)' }}>{showObj.description}</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: 'rgb(247, 157, 17)' }}>{showObj.category.name}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-center mt-2">
            <Link passHref href={`/shows/details/${showObj.id}`}>
              <Button variant="outline-dark" className="me-2">
                Detail
              </Button>
            </Link>
            {selectRsvp ? (
              <span className="text-success">Spot Reserved</span>
            ) : (
              <Button variant="outline-light" onClick={() => RSVP(showObj.id)}>
                RSVP
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

ShowCards.propTypes = {
  showObj: PropTypes.shape({
    airDateFormatted: PropTypes.string,
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
