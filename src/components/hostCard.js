import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getUserHostedShows, deleteSingleShow } from '../api/ShowData'; // Import the new function

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
    // window.location.reload();
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
      <Card style={{ width: '100%', maxWidth: '600px', backgroundColor: 'rgb(247, 157, 17)', border: '2px solid rgb(251, 71, 154)' }}>
        <Card.Body>
          <Card.Title>Your Hosted Shows</Card.Title>
          {hostedShows.length > 0 ? (
            <ul style={{ paddingLeft: '20px' }}>
              {hostedShows.map((show) => (
                <>
                  <li key={show.id} style={{ listStyleType: 'disc', marginBottom: '8px' }}>
                    {show.name}
                  </li>
                  <div>
                    <Button variant="outline-light" className="me-2" onClick={() => handleDelete(show)}>
                      DELETE SHOW
                    </Button>
                  </div>
                  <div>
                    <Link href={`/shows/edit/${show.id}`} passHref>
                      <Button variant="outline-light" className="me-2">
                        EDIT SHOW
                      </Button>
                    </Link>
                  </div>
                </>
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
