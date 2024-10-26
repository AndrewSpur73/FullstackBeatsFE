import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { getAllShows } from '../api/ShowData';

function ShowsList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getAllShows()
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching shows:', error));
  }, []);

  return (
    <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '600px', backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)' }}>
        <Card.Body>
          <Card.Title>Shows List</Card.Title>
          <ul style={{ paddingLeft: '20px' }}>
            {shows.map((show) => (
              <li key={show.id} style={{ listStyleType: 'disc', marginBottom: '8px' }}>
                {show.name}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ShowsList;
