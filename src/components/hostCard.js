import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import { getUserHostedShows } from '../api/ShowData'; // Import the new function

function HostCard() {
  const { user } = useAuth();
  const [hostedShows, setHostedShows] = useState([]);

  useEffect(() => {
    if (user.id) {
      getUserHostedShows(user.id)
        .then((data) => setHostedShows(data))
        .catch((error) => console.error('Error fetching shows:', error));
    }
  }, [user]);

  return (
    <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '600px', backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)' }}>
        <Card.Body>
          <Card.Title>Your Hosted Shows</Card.Title>
          {hostedShows.length > 0 ? (
            <ul style={{ paddingLeft: '20px' }}>
              {hostedShows.map((show) => (
                <li key={show.id} style={{ listStyleType: 'disc', marginBottom: '8px' }}>
                  {show.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No shows hosted by you.</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HostCard;
// test
