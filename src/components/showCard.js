'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';

import styles from '../styles/globals.css';

function ShowCards({ showObj }) {
  const [crudAction, setCrudAction] = useState(false);
  const [selectRsvp, setSelectRsvp] = useState(false);

  const toggleCrudAction = () => {
    setCrudAction(!crudAction);
  };

  const toggleselectRsvp = () => {
    setSelectRsvp(!selectRsvp);
  };

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
            <Button variant="outline-dark" className="me-2" onClick={toggleCrudAction}>
              Detail
            </Button>
            <span>
              {crudAction ? (
                <div>
                  <Link href={`/shows/edit/${showObj.id}`} passHref>
                    <Button variant="outline-light" className="me-2">
                      EDIT SHOW
                    </Button>
                  </Link>
                </div>
              ) : (
                ''
              )}
            </span>

            <Button variant="outline-light" onClick={toggleselectRsvp}>
              RSVP
              <span>{selectRsvp ? ' 💙' : ' 🤍'}</span>
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
