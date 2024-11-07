import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getUserHostedShows, deleteSingleShow } from '../api/ShowData';

function HostCard() {
  const { user } = useAuth();
  const [hostedShows, setHostedShows] = useState([]);

  const handleDelete = (showObj) => {
    if (window.confirm(`Delete ${showObj.id}`)) {
      deleteSingleShow(showObj.id).then(() =>
        getUserHostedShows(user.id)
          .then((data) => setHostedShows(data))
          .catch((error) => console.error('Error fetching shows:', error)),
      );
    }
  };

  useEffect(() => {
    if (user.id) {
      getUserHostedShows(user.id)
        .then((data) => setHostedShows(data))
        .catch((error) => console.error('Error fetching shows:', error));
    }
  }, [user]);

  return (
    <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '100%', maxWidth: '1000px', backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)' }}>
        <Card.Body>
          <Card.Title>Your Hosted Shows</Card.Title>
          {hostedShows.length > 0 ? (
            <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
              {hostedShows.map((show) => (
                <li key={show.id} style={{ marginBottom: '8px' }}>
                  <Card style={{ backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)', height: '100%', width: '90%' }}>
                    <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
                      <span style={{ flexGrow: 1 }}>{show.name}</span> {/* Expands to take available space */}
                      <Button variant="outline-danger" className="me-2" onClick={() => handleDelete(show)}>
                        DELETE SHOW
                      </Button>
                      <Link href={`/shows/edit/${show.id}`} passHref>
                        <Button variant="outline-primary">EDIT SHOW</Button>
                      </Link>
                    </Card.Body>
                  </Card>
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
