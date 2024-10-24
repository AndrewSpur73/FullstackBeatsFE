'use client';

import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ShowCards({ showObj }) {
  return (
    <div>
      {console.log(showObj)}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={showObj.image} />
        <Card.Body className="text-center">
          <Card.Title>{showObj.category.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>{showObj.name} </ListGroup.Item>
            <ListGroup.Item>{showObj.airDate}</ListGroup.Item>
            <ListGroup.Item>{showObj.description}</ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-center mt-2">
            <Button variant="primary" className="me-2">
              Detail
            </Button>
            <Button variant="success">RSVP</Button>
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
