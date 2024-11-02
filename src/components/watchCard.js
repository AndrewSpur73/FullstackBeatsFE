import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { showsToAttend, removeReservation } from '../api/ShowData';
import { useAuth } from '../utils/context/authContext';

function WatchCard() {
  const { user } = useAuth();
  const [shows, setShows] = useState([]);
  // const [selectRsvp, setSelectRsvp] = useState(false);

  const unRSVP = (rsvpObj) => {
    if (window.confirm(`Delete ${rsvpObj.name}`)) {
      removeReservation(user.id, rsvpObj.id)
        .then(() => showsToAttend(user.id))
        .then((data) => setShows(data))
        .catch((error) => console.error('Error fetching shows:', error));
    }
  };

  // const toggleselectRsvp = () => {
  //   setSelectRsvp(!selectRsvp);
  // };

  useEffect(() => {
    showsToAttend(user.id)
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching shows:', error));
  }, [shows]);

  return (
    <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '600px', backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)' }}>
        <Card.Body>
          <Card.Title>Shows To Watch</Card.Title>
          <ul style={{ paddingLeft: '20px' }}>
            {shows.map((show) => (
              <li key={show.id} style={{ listStyleType: 'disc', marginBottom: '8px' }}>
                {show.name}
                <Button variant="outline-light" className="me-2" onClick={() => unRSVP(show)}>
                  {' '}
                  unRSVP{' '}
                </Button>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default WatchCard;
