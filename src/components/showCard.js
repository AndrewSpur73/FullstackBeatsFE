'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';

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
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={showObj.image} />
        <Card.Body className="text-center">
          <Card.Title>{showObj.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>{showObj.name} </ListGroup.Item>
            <ListGroup.Item>{showObj.airDate}</ListGroup.Item>
            <ListGroup.Item>{showObj.description}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="primary" className="me-2" onClick={toggleCrudAction}>
              Detail
              <span>
                {crudAction ? (
                  <>
                    <Link href="/shows/edit" passHref>
                      <Button variant="primary" className="me-2">
                        EDIT SHOW
                      </Button>
                    </Link>

                    <Link href="/shows/delete" passHref>
                      <Button variant="primary" className="me-2">
                        DELETE SHOW
                      </Button>
                    </Link>
                  </>
                ) : (
                  ''
                )}
              </span>
            </Button>

            <Button variant="success" onClick={toggleselectRsvp}>
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
    category: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
export default ShowCards;
